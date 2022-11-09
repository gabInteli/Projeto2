//incluindo bibliotecas
#include <Adafruit_AHTX0.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <WiFi.h>
#include <HTTPClient.h>

//definindo em qual entrada    esta cada led 
int azul = 21;       // Atribui o valor 9 a variável azul
int verde = 20;      // Atribui o valor 10 a variável verde
int vermelho = 19;   // Atribui o valor 12 a variável vermelho
int azul2 = 39;      // Atribui o valor 9 a variável azul
int verde2 = 40;     // Atribui o valor 10 a variável verde
int vermelho2 = 41;  // Atribui o valor 12 a variável vermelho

const char* ssid = "MSMXD";
const char* password = "12345678";

String server = "http://maker.ifttt.com";
String eventName = "esp32_data";
String IFTTT_Key = "dSu74GOXfLf7WJPSASzxEXmzq7JT5XY1TLfBf4UwSu3";
String IFTTTUrl = "http://maker.ifttt.com/trigger/temp_data/with/key/e272MXJrh4_et5KUm56LmYHjJrNRtj9BjxUT5u6Njr7";

float value1;
float value2;
float value3;

#define SDA_PIN 15
#define SCL_PIN 16

int lcdColumns = 16;
int lcdRows = 2;

Adafruit_AHTX0 aht;
LiquidCrystal_I2C lcd(0x27, lcdColumns, lcdRows);



void setup() {
  Serial.begin(115200);
  Wire.begin(SDA_PIN, SCL_PIN);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Viola, Connected !!!");
  Serial.println("Adafruit AHT10/AHT20 demo!");
  lcd.init();
  lcd.backlight();

  if (!aht.begin()) {
    Serial.println("Could not find AHT? Check wiring");
    while (1) delay(10);
  }
  Serial.println("AHT10 or AHT20 found");

  pinMode(azul, OUTPUT);       // Define a variável azul como saída
  pinMode(verde, OUTPUT);      // Define a variável verde como saída
  pinMode(vermelho, OUTPUT);   // Define a variável vermelho como saída
  pinMode(azul2, OUTPUT);      // Define a variável azul como saída
  pinMode(verde2, OUTPUT);     // Define a variável verde como saída
  pinMode(vermelho2, OUTPUT);  // Define a variável vermelho como saída
}

void sendDataToSheet(void) {
  String url = server + "/trigger/" + eventName + "/with/key/" + IFTTT_Key + "?value1=" + String((float)value1) + "&value2=" + String((float)value2) + "&value3=" + String((float)value3);
  Serial.println(url);
  //Start to send data to IFTTT
  HTTPClient http;
  Serial.print("[HTTP] begin...\n");
  http.begin(url);  //HTTP

  Serial.print("[HTTP] GET...\n");
  // start connection and send HTTP header
  int httpCode = http.GET();
  // httpCode will be negative on error
  if (httpCode > 0) {
    // HTTP header has been send and Server response header has been handled
    Serial.printf("[HTTP] GET... code: %d\n", httpCode);
    // file found at server
    if (httpCode == HTTP_CODE_OK) {
      String payload = http.getString();
      Serial.println(payload);
    }
  } else {
    Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
  }
  http.end();
}


void loop() {


  sensors_event_t humidity, temp;
  aht.getEvent(&humidity, &temp);  // populate temp and humidity objects with fresh data
  Serial.print("Temperature: ");
  Serial.print(temp.temperature);
  Serial.println(" degrees C");
  Serial.print("Humidity: ");
  Serial.print(humidity.relative_humidity);
  Serial.println("% rH");
  lcd.setCursor(0, 0);
  lcd.print("Temp:");
  lcd.print(temp.temperature);
  lcd.setCursor(0, 1);
  lcd.print("Umidade:");
  lcd.print(humidity.relative_humidity);
  delay(1000);

  delay(500);
//verifica as temperaturas obtidas e acende o led correspondente de acordo com o resultado obtido
  if (temp.temperature > 23 && temp.temperature < 30) {
    Verde1();
    delay(10000);
  } else {
    Vermelho1();
    delay(10000);
  }
  //verifica as umidades obtidas e acende o led correspondente de acordo com o resultado obtido
  if (humidity.relative_humidity < 80 && humidity.relative_humidity > 40) {
    Verde2();
    delay(10000);
  } else {
    Vermelho2();
    delay(10000);
  }

//pega a temperatura para enviar à database
  value1 = temp.temperature;
  value2 = humidity.relative_humidity;

  sendDataToSheet();
  delay(10000);
}

//funcoes para fazer o led rgb ficar nas cores desejadas
//luz que refere à temperatura quando não está em seu estado ideal
void Vermelho1() {
  digitalWrite(vermelho, HIGH);  // Coloca vermelho em nível alto, ligando-o
  digitalWrite(verde, LOW);
  delay(1000);  // Intervalo de 1 segundo
                // Intervalo de 1 segundo
}
//luz que refere à temperatura quando está em seu estado ideal
void Verde1() {
  digitalWrite(verde, HIGH);  //Coloca verde em nível alto
  digitalWrite(vermelho, LOW);
  delay(1000);  //Intervalo de 1 segundo
}
//luz que refere à umidade quando não está em seu estado ideal
void Vermelho2() {
  digitalWrite(vermelho2, HIGH);  // Coloca vermelho em nível alto, ligando-o
  digitalWrite(verde2, LOW);
  delay(1000);  // Intervalo de 1 segundo
}
//luz que refere à umidade quando está em seu estado ideal
void Verde2() {
  digitalWrite(verde2, HIGH);  //Coloca verde em nível alto
  digitalWrite(vermelho2, LOW);
  delay(1000);  //Intervalo de 1 segundo
}


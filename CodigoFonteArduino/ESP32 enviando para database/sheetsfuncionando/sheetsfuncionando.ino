#include <Adafruit_AHTX0.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <WiFi.h>
#include <HTTPClient.h>

#define SDA_PIN 15//
#define SCL_PIN 16//

int blueTemp = 21;//pinangem do RGB de temperatura cor azul  
int greenTemp = 20;//pinangem do RGB de temperatura cor verde     
int redTemp = 19;//pinangem do RGB de temperatura cor vermelha   
int blueHum = 39;//pinangem do RGB de umidade cor azul      
int greenHum = 40;//pinangem do RGB de umidade cor verde     
int redHum = 41;//pinangem do RGB de umidade cor vermelha  

//nome da rede wifi do microcontrolador e sua senha 
const char* ssid = "MSMXD"; //nome da rede wifi
const char* password = "12345678";//nome da rede bluetooth

//Parametros para envio de dados coletados para o server 
String server = "http://maker.ifttt.com";
String eventName = "esp32_data";
String IFTTT_Key = "dSu74GOXfLf7WJPSASzxEXmzq7JT5XY1TLfBf4UwSu3";
String IFTTTUrl = "http://maker.ifttt.com/trigger/temp_data/with/key/e272MXJrh4_et5KUm56LmYHjJrNRtj9BjxUT5u6Njr7";

float value1;//variavel criada salvar o valor da temperatura  
float value2;//variavel criada salvar o valor da umidade 
float value3;//deletar value3

int lcdColumns = 16; //definição do numero de colunas do LCD
int lcdRows = 2; //definição do numero de linhas do LCD

Adafruit_AHTX0 aht;//chamada da biblioteca do aht10
LiquidCrystal_I2C lcd(0x27, lcdColumns, lcdRows);//

void setup() {
  Serial.begin(115200);
  Wire.begin(SDA_PIN, SCL_PIN);
  WiFi.mode(WIFI_STA); // Configura o ESP32 como uma estação WiFi, ou seja, a placa se conectará a um ponto de acesso.
  WiFi.begin(ssid, password); // Conecta na rede definida pelas variáveis.
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

//Setagem de OUTPUT´S para a piangem dos LED´S RGB
  pinMode(blueTemp, OUTPUT);       
  pinMode(greenTemp, OUTPUT);      
  pinMode(redTemp, OUTPUT);   
  pinMode(blueHum, OUTPUT);      
  pinMode(greenHum, OUTPUT);     
  pinMode(redHum, OUTPUT); 
}

void sendDataToSheet(void) { // Função que mandará os dados capturados pelos sensores para uma planilha, que atualmente opera como nosso banco de dados.
  String url = server + "/trigger/" + eventName + "/with/key/" + IFTTT_Key + "?value1=" + String((float)value1) + "&value2=" + String((float)value2) + "&value3=" + String((float)value3);//deletar value3
  Serial.println(url);
  // Começa a mandar dados para o IFTTT.
  HTTPClient http;
  Serial.print("[HTTP] begin...\n");
  http.begin(url); 

  Serial.print("[HTTP] GET...\n");
  // Começa a conexão e envia o cabeçalho HTTP.
  int httpCode = http.GET();
  // httpCode será negativo quando der erro.
  if (httpCode > 0) {
    // O cabeçalho HTTP foi enviado e o cabeçalho de resposta do servidor foi tratado.
    Serial.printf("[HTTP] GET... code: %d\n", httpCode);
    // Arquivo encontrado no servidor.
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
  aht.getEvent(&humidity, &temp);  // Preenche os objetos temp e humidity com dados novos.
  Serial.print("Temperature: ");
  Serial.print(temp.temperature);// printa no serial o valor da temperatura lida pelo sensor AHT10 
  Serial.println(" degrees C");
  Serial.print("Humidity: ");
  Serial.print(humidity.relative_humidity);// printa no serial o valor da umidade lida pelo sensor AHT10
  Serial.println("% rH");
  lcd.setCursor(0, 0);
  lcd.print("Temperature:");
  lcd.print(temp.temperature);// printa no lcd o valor da umidade lida pelo sensor AHT10
  lcd.setCursor(0, 1);
  lcd.print("Humidity:");
  lcd.print(humidity.relative_humidity);// printa no lcd o valor da umidade lida pelo sensor AHT10
  delay(1000);

  delay(500);

// Verifica as temperaturas obtidas e acende o led correspondente de acordo com o resultado obtido.
  if (temp.temperature > 23 && temp.temperature < 30) {
    rightTemperature();
    delay(10000);
  } else {
    wrongTemperature();
    delay(10000);
  }
  // Verifica as umidades obtidas e acende o led correspondente de acordo com o resultado obtido.
  if (humidity.relative_humidity < 80 && humidity.relative_humidity > 40) {
    rightHumidity();
    delay(10000);
  } else {
    wrongHumidity();
    delay(10000);
  }

// Pega a temperatura para enviar à planilha.
  value1 = temp.temperature;
  value2 = humidity.relative_humidity;

  sendDataToSheet();
  delay(10000);
}

//Funções para fazer o led rgb ficar nas cores desejadas, de acordo com o ambiente.

// Luz que refere à temperatura quando não está em seu estado ideal.
void wrongTemperature() {
  digitalWrite(redTemp, HIGH); 
  digitalWrite(greenTemp, LOW);
  delay(1000);        
}
// Luz que refere à temperatura quando está em seu estado ideal.
void rightTemperature() {
  digitalWrite(greenTemp, HIGH); 
  digitalWrite(redTemp, LOW);
  delay(1000);  
}
// Luz que refere à umidade quando não está em seu estado ideal.
void wrongHumidity() {
  digitalWrite(redHum, HIGH); 
  digitalWrite(greenHum, LOW);
  delay(1000);  
}
// Luz que refere à umidade quando está em seu estado ideal.
void rightHumidity() {
  digitalWrite(greenHum, HIGH);  
  digitalWrite(redHum, LOW);
  delay(1000);  
}


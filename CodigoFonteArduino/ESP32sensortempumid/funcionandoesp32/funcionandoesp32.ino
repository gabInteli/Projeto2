#include <Adafruit_AHTX0.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

int azul = 21;       // Atribui o valor 9 a variável azul
int verde = 20;      // Atribui o valor 10 a variável verde
int vermelho = 19;   // Atribui o valor 12 a variável vermelho
int azul2 = 39;      // Atribui o valor 9 a variável azul
int verde2 = 40;     // Atribui o valor 10 a variável verde
int vermelho2 = 41;  // Atribui o valor 12 a variável vermelho


#define SDA_PIN 15
#define SCL_PIN 16

int lcdColumns = 16;
int lcdRows = 2;

Adafruit_AHTX0 aht;
LiquidCrystal_I2C lcd(0x27, lcdColumns, lcdRows);

void setup() {
  Serial.begin(115200);
  Wire.begin(SDA_PIN, SCL_PIN);
  Serial.println("Adafruit AHT10/AHT20 demo!");
  lcd.init();
  lcd.backlight();

  if (! aht.begin()) {
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


void loop() {

  sensors_event_t humidity, temp;
  aht.getEvent(&humidity, &temp);// populate temp and humidity objects with fresh data
  Serial.print("Temperature: "); Serial.print(temp.temperature); Serial.println(" degrees C");
  Serial.print("Humidity: "); Serial.print(humidity.relative_humidity); Serial.println("% rH");
  lcd.setCursor(0, 0);
  lcd.print("Temp:");
  lcd.print(temp.temperature);
  lcd.setCursor(0, 1);
  lcd.print("Umidade:");
  lcd.print(humidity.relative_humidity);
  delay(1000);

  delay(500);
    
      if (temp.temperature > 23 && temp.temperature < 30) {
        Verde1();
          delay(10000);
      }
      else {
        Vermelho1();
          delay(10000);
    }
      if (humidity.relative_humidity < 80 && humidity.relative_humidity > 40) {
      Verde2();
        delay(10000);
    }
    else {
      Vermelho2();
        delay(10000);
    }
}


void Vermelho1() {
            digitalWrite(vermelho, HIGH);  // Coloca vermelho em nível alto, ligando-o
            digitalWrite(verde, LOW);
            delay(1000);         // Intervalo de 1 segundo
             // Intervalo de 1 segundo

        }

void Verde1() {
            digitalWrite(verde, HIGH);//Coloca verde em nível alto
            digitalWrite(vermelho, LOW);
            delay(1000);//Intervalo de 1 segundo
        }

void Vermelho2() {
            digitalWrite(vermelho2, HIGH);  // Coloca vermelho em nível alto, ligando-o
            digitalWrite(verde2, LOW);
            delay(1000);         // Intervalo de 1 segundo
        }

void Verde2() {
            digitalWrite(verde2, HIGH);//Coloca verde em nível alto
            digitalWrite(vermelho2, LOW);
            delay(1000);//Intervalo de 1 segundo
        }


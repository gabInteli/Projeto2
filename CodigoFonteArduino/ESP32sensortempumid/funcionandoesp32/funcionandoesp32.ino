#include <Adafruit_AHTX0.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

#define SDA_PIN 15
#define SCL_PIN 16

int blueTemp = 21;       
int greenTemp = 20;      
int redTemp = 19;   
int blueHum = 39;      
int greenHum = 40;     
int redHum = 41;  

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

    pinMode(blueTemp, OUTPUT);       
    pinMode(greenTemp, OUTPUT);      
    pinMode(redTemp, OUTPUT);   
    pinMode(blueHum, OUTPUT);      
    pinMode(greenHum, OUTPUT);     
    pinMode(redHum, OUTPUT);  

}


void loop() {

  sensors_event_t humidity, temp;
  aht.getEvent(&humidity, &temp); // Preenche os objetos temp e humidity com dados novos.
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

// Verifica as temperaturas obtidas e acende o led correspondente de acordo com o resultado obtido.    
      if (temp.temperature > 23 && temp.temperature < 30) {
        rightTemperature();
          delay(10000);
      }
      else {
        wrongTemperature();
          delay(10000);
    }
      if (humidity.relative_humidity < 80 && humidity.relative_humidity > 40) {
      rightHumidity();
        delay(10000);
    }
    else {
      wrongHumidity();
        delay(10000);
    }
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


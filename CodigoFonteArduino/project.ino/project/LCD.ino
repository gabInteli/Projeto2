#include <Wire.h>
#include <LiquidCrystal_I2C.h>

int lcdColumns = 16; //definição do numero de colunas do LCD
int lcdRows = 2; //definição do numero de linhas do LCD

// Definição de macros (Pinos I2C do circuito)
#define SDA_PIN 15
#define SCL_PIN 16 

// Objeto do LCD (biblioteca do LCD)
LiquidCrystal_I2C lcd(0x27, lcdColumns, lcdRows);

// Função que inicializa o LCD
void displayInitialization() {
  // Inicialização do I2C
  Wire.begin(SDA_PIN, SCL_PIN);
  // Inicialização do próprio LCD
  lcd.init();
  // Inicialização do backlight do LCD
  lcd.backlight();
}

void showMessage(String temp, String humidity) {
// Mostra a mensagem com o status da temperatura setada para o ínicio da primeira linha
  lcd.setCursor(0, 0);
  lcd.print("Temp:");
  lcd.print(temp);
// Mostra a mensagem com o status da umidade setada para o ínicio da segunda linha
  lcd.setCursor(0, 1);
  lcd.print("Umidade:");
  lcd.print(humidity);
  delay(100);
}

void clearLCD(){
  lcd.clear();
}

void wifiNotConnectedLCD() {
    lcd.setCursor(0, 0);
    lcd.print("Conecte ao WIFI");
}
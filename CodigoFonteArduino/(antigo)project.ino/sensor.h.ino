#include <Wire.h>
#include <Adafruit_AHTX0.h>

// Definição de macros (Pinos I2C do circuito)
#define SDA_PIN 15
#define SCL_PIN 16

Adafruit_AHTX0 aht; // Cria um objeto para o sensor(biblioteca do AHT10)

// Inicialização do sensor
void sensorInitialization() {
  Wire.begin(SDA_PIN, SCL_PIN); // Configuração dos pinos do sistema
  // Checa se o sensor foi identificado pelo sistema ou não
  Serial.begin(115200);
  Serial.println("Adafruit AHT10/AHT20 demo!");
  if (! aht.begin()) {
    Serial.println("Could not find AHT? Check wiring");
    while (1) delay(10);
  }
  Serial.println("AHT10 or AHT20 found");
}

// Função que retorna a temperatura do ambiente
float scanTemperature() {
  sensors_event_t humidity, temp; // Criação de objetos
  aht.getEvent(&humidity, &temp); // Preenche os objetos temp e humidity com dados novos.
  Serial.print("Temperatura: "); Serial.print(temp.temperature); Serial.println(" degrees C"); 
}

//Função que retorna a umidade do ambiente
float scanHumidity() {
  sensors_event_t humidity, temp; // Criação de objetos
  aht.getEvent(&humidity, &temp); // Preenche os objetos temp e humidity com dados novos.
  Serial.print("Umidade: "); Serial.print(humidity.relative_humidity); Serial.println("% rH");
}

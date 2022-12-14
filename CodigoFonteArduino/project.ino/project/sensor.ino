#include <Wire.h>
#include <Adafruit_AHTX0.h>

Adafruit_AHTX0 aht; // Cria um objeto para o sensor(biblioteca do AHT10)

//define os parametros de OUTPUT para os pinos do RGB
void leds(){
    pinMode(blueTemp, OUTPUT);       
    pinMode(greenTemp, OUTPUT);      
    pinMode(redTemp, OUTPUT);   
    pinMode(blueHum, OUTPUT);      
    pinMode(greenHum, OUTPUT);     
    pinMode(redHum, OUTPUT);
    pinMode(yellowError, OUTPUT);
    pinMode(blueErrorWifi, OUTPUT);
  return;
}

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
return temp.temperature;
}

//Função que retorna a umidade do ambiente
float scanHumidity() {
  sensors_event_t humidity, temp; // Criação de objetos
  aht.getEvent(&humidity, &temp); // Preenche os objetos temp e humidity com dados novos.
  Serial.print("Umidade: "); Serial.print(humidity.relative_humidity); Serial.println("% rH");
  return humidity.relative_humidity;
}

void color_led(){
    sensors_event_t humidity, temp; // Criação de objetos
    aht.getEvent(&humidity, &temp); // Preenche os objetos temp e humidity com dados novos.
      // Verifica as temperaturas obtidas e acende o led correspondente de acordo com o resultado obtido.    
      if (temp.temperature > 22 && temp.temperature < 30) {
        digitalWrite(greenTemp, HIGH); //aciona luz verde do led de temperatura.
        digitalWrite(redTemp, LOW);
          delay(1000);
      }
      else {
        digitalWrite(redTemp, HIGH);  //aciona a luz vermelha do led de temperatura.
        digitalWrite(greenTemp, LOW);
          delay(1000);
    }
      if (humidity.relative_humidity < 80 && humidity.relative_humidity > 40) {
      digitalWrite(greenHum, HIGH); //aciona luz verde do led de umidade.
      digitalWrite(redHum, LOW);
        delay(1000);
    }
    else {
      digitalWrite(redHum, HIGH);  //aciona luz vermelha do led de umidade.
      digitalWrite(greenHum, LOW);
        delay(1000);
    }
  return;
}

void sensortest(){
    if (! aht.begin()) {
    digitalWrite (yellowError, HIGH);  
    while (1) delay(100);
  }
} 
#include "sensor.h"
#include "display.h"

// Inicialização de variáveis globais, comportarão saídas de LED's e o valor que elas guardam é referente aos pinos que às alimentam
int blueTemp = 21;//definição da pinagem do led azul do RGB de temperatura        
int greenTemp = 20;//definição de pinagem do led verde do RGB de temperatura       
int redTemp = 19;//definição de pinagem do led vermelho do RGB de temperatura    
int blueHum = 39;//definiçao de pinagem do led azul do RGB de umidade       
int greenHum = 40;//definição de pinagem do led verde do RGB de umidade      
int redHum = 41;//definição de pinagem do led vermelho   

void setup() {
  //define os parametros de OUTPUT para os pinos do RGB
    pinMode(blueTemp, OUTPUT);       
    pinMode(greenTemp, OUTPUT);      
    pinMode(redTemp, OUTPUT);   
    pinMode(blueHum, OUTPUT);      
    pinMode(greenHum, OUTPUT);     
    pinMode(redHum, OUTPUT);

    sensorInitialization(); // Função que inicializa a leitura do sensor de temperatura e umidade
    displayInitialization(); // Função que inicializa o Display LCD
}


void loop() {
  delay(500);//Intervalo para reiniciar loop
  float temp = scanTemperature(); // Variavel que pega os valores de temperatura do ambiente
  float humidity = scanHumidity(); // Variavel que pega os valores de umidade do ambiente
  showMessage(temp, humidity); // Função que indica no LCD os valores lidos de temperatura e umidade

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
            digitalWrite(redTemp, HIGH);  //aciona a luz vermelha do led de temperatura.
            digitalWrite(greenTemp, LOW); //desativa luz verde do led de temperatura.
            delay(1000);        
        }
// Luz que refere à temperatura quando está em seu estado ideal.
void rightTemperature() {
            digitalWrite(greenTemp, HIGH); //aciona luz verde do led de temperatura.
            digitalWrite(redTemp, LOW); //desativa luz vermelha do led de temperatura.
            delay(1000);
        }
// Luz que refere à umidade quando não está em seu estado ideal.
void wrongHumidity() {
            digitalWrite(redHum, HIGH);  //aciona luz vermelha do led de umidade.
            digitalWrite(greenHum, LOW); //desativa luz verde do led de umidade.
            delay(1000);        
        }
// Luz que refere à umidade quando está em seu estado ideal.
void rightHumidity() {
            digitalWrite(greenHum, HIGH); //aciona luz verde do led de umidade.
            digitalWrite(redHum, LOW); //desativa luz vermelha do led de umidade.
            delay(1000);
        }


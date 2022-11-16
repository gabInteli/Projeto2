// Inicialização de variáveis globais, comportarão saídas de LED's e o valor que elas guardam é referente aos pinos que os alimentam
int blueTemp = 21;//definição da pinagem do led azul do RGB de temperatura        
int greenTemp = 20;//definição de pinagem do led verde do RGB de temperatura       
int redTemp = 19;//definição de pinagem do led vermelho do RGB de temperatura    
int blueHum = 39;//definiçao de pinagem do led azul do RGB de umidade       
int greenHum = 40;//definição de pinagem do led verde do RGB de umidade      
int redHum = 41;//definição de pinagem do led vermelho 

float value1;//variavel criada salvar o valor da temperatura  
float value2;//variavel criada salvar o valor da umidade 
float value3;//dnão esta sendo utilizado no momento 

void setup() {
    wifiInitialization(); // Funçaõ que inicializa a conexão wi-fi do microcontrolador
    sensorInitialization(); // Função que inicializa a leitura do sensor de temperatura e umidade
    displayInitialization(); // Função que inicializa o Display LCD
    leds();    
}


void loop() {
  delay(500);//Intervalo para reiniciar loop
  float temp_01 = scanTemperature(); // Variavel que pega os valores de temperatura do ambiente
  float humidity_01 = scanHumidity(); // Variavel que pega os valores de umidade do ambiente
  showMessage(String(temp_01), String(humidity_01)); // Função que indica no LCD os valores lidos de temperatura e umidade
  color_led();
  value1 = temp_01;
  value2 = humidity_01;
  sendDataToSheet();
  delay(10000);
}




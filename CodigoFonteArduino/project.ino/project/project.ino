// Inicialização de variáveis globais, comportarão saídas de LED's e o valor que elas guardam é referente aos pinos que os alimentam
const int blueTemp = 20;//definição da pinagem do led azul do RGB de temperatura        
const int greenTemp = 21;//definição de pinagem do led verde do RGB de temperatura       
const int redTemp = 47;//definição de pinagem do led vermelho do RGB de temperatura    
const int blueHum = 39;//definiçao de pinagem do led azul do RGB de umidade       
const int greenHum = 40;//definição de pinagem do led verde do RGB de umidade      
const int redHum = 41;//definição de pinagem do led vermelho 

float temperatura1;//variavel criada salvar o valor da temperatura  
float umidade2;//variavel criada salvar o valor da umidade 

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
  temperatura1 = temp_01;
  umidade2 = humidity_01;
  sendDataToSheet();
  delay(10000);
}




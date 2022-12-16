#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiManager.h> // https://github.com/tzapu/WiFiManager
int distancia [100]; // Vetor que armazena os dados caso haja queda de energia 

//Parametros para envio de dados coletados para o server 
String server = "http://maker.ifttt.com";
String eventName = "esp32_data";
String IFTTT_Key = "dSu74GOXfLf7WJPSASzxEXmzq7JT5XY1TLfBf4UwSu3";
String IFTTTUrl = "http://maker.ifttt.com/trigger/temp_data/with/key/e272MXJrh4_et5KUm56LmYHjJrNRtj9BjxUT5u6Njr7";

void wifistart(){
    WiFi.mode(WIFI_STA); //  determina que o ESP sera cliente
    Serial.begin(115200); //define a porta serial
    
    //wifi manager inicializado. Uma vez que inicializado, não é necessário roda-lo novamente
    WiFiManager wm;

    //Caso de teste para testar a wifi manager. Descomente e rode-o para apagar as redes.
    wm.resetSettings();

    // Irá tentar conectar automaticamente 'as redes salvas
    // se não for possível conectar a nenhuma rede salva, será gerada uma rede ( "C2PO-Estufa1"),


    bool res;
    res = wm.autoConnect("C2PO-Estufa1"); // rede wifi para configuração de parâmetros

    if(!res) {
        Serial.println("Erro ao conectar...");
        // ESP.restart();
    } 
    else {
        //if you get here you have connected to the WiFi    
        Serial.println("conectado com sucesso!");
    }
}





void sendDataToSheet(void) { // Função que mandará os dados capturados pelos sensores para uma planilha, que atualmente opera como nosso banco de dados.
  String url = server + "/trigger/" + eventName + "/with/key/" + IFTTT_Key + "?value1=" + String((float)value1) + "&value2=" + String((float)value2);//deletar value3
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
    clearLCD();
    digitalWrite (blueErrorWifi, HIGH);  
    wifiNotConnectedLCD(); 
    delay(1500);
    clearLCD();
  }
  http.end();
}
#include <WiFi.h>
#include <HTTPClient.h>
//nome da rede wifi do microcontrolador e sua senha 
const char* ssid = "MSMXD"; //nome da rede wifi
const char* password = "12345678";//senha da rede wifi
//Parametros para envio de dados coletados para o server 
String server_wifi = "http://maker.ifttt.com";
String eventName = "esp32_data";
String IFTTT_Key = "dSu74GOXfLf7WJPSASzxEXmzq7JT5XY1TLfBf4UwSu3";
String IFTTTUrl = "http://maker.ifttt.com/trigger/temp_data/with/key/e272MXJrh4_et5KUm56LmYHjJrNRtj9BjxUT5u6Njr7";
void wifiInitialization(){
  WiFi.mode(WIFI_STA); // Configura o ESP32 como uma estação WiFi, ou seja, a placa se conectará a um ponto de acesso.
  WiFi.begin(ssid, password); // Conecta na rede definida pelas variáveis.
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Viola, Connected !!!");
}
void sendDataToSheet(void) { // Função que mandará os dados capturados pelos sensores para uma planilha, que atualmente opera como nosso banco de dados.
  String url = server_wifi + "/trigger/" + eventName + "/with/key/" + IFTTT_Key + "?value1=" + String((float)value1) + "&value2=" + String((float)value2);
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
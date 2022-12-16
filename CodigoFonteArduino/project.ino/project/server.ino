#include <WiFi.h>
#include <HTTPClient.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>

const char* DBserverName = "http://c2po.000webhostapp.com/esp-post-data.php";

// Keep this API Key value to be compatible with the PHP code provided in the project page.
// If you change the apiKeyValue value, the PHP file /esp-post-data.php also needs to have the same key
String apiKeyValue = "tPmAT5Ab3j7F9";
String sensorName = "AHT10";
String sensorLocation = "Office";

unsigned long lastTime = 0;
unsigned long timerDelay = 30000;

void sendDataToDB() {
  sensors_event_t humidity, temp; // Criação de objetos
  aht.getEvent(&humidity, &temp); // Preenche os objetos temp e humidity com dados novos.
  Serial.print("Temperatura: "); Serial.print(temp.temperature); Serial.println(" degrees C"); 
  
  if ((millis() - lastTime) > timerDelay) {
    if(WiFi.status()== WL_CONNECTED){
      WiFiClient client;
      HTTPClient http;

      http.begin(client, DBserverName);
      http.addHeader("Content-Type", "application/x-www-form-urlencoded");

      String httpRequestData = "api_key=" + apiKeyValue + "&sensor=" + sensorName + "&value1=" + temp.temperature + "&value2=" + humidity.relative_humidity;
      Serial.print("httpRequestData: ");
      Serial.println(httpRequestData);

      int httpResponseCode = http.POST(httpRequestData);
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}
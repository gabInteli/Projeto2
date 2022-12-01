#include <WiFi.h>
#include <WiFiAP.h>
#include <WebServer.h>
/* INCLUDE ESP2SOTA LIBRARY */
#include <ESP2SOTA.h>

const char* ssid_server = "ESP32_C2PO";
const char* password_server = "wifi_123";

//String htmlMessage = "";

WebServer server(80);


void serverInitialization() {
  
  Serial.begin(115200);
  WiFi.mode(WIFI_AP);  
  WiFi.softAP(ssid_server, password_server);
  delay(1000);
  IPAddress IP = IPAddress (10, 10, 10, 1);
  IPAddress NMask = IPAddress (255, 255, 255, 0);
  WiFi.softAPConfig(IP, IP, NMask);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);


  server.on("/myurl", handle_root);
  /* INITIALIZE ESP2SOTA LIBRARY */
  ESP2SOTA.begin(&server);
  server.begin();


}

void local_web() {
  /* HANDLE UPDATE REQUESTS */
  server.handleClient();
  delay(5);
}

// Handle root url (/)
void handle_root(){
  String htmlMessage = "";
  htmlMessage += "<!DOCTYPE html>";
  htmlMessage += "<html>";
  htmlMessage += "<body>";

  htmlMessage += "<h2> Temperatura: </h2>";
  htmlMessage += String(value1);
  htmlMessage += "<h2> Umidade: </h2>";
  htmlMessage += String(value2);
  
  htmlMessage += "</html>";

  server.send(200, "text/html", htmlMessage);
}





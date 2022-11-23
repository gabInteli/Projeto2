#include <WiFi.h>
#include <WiFiAP.h>
#include <WebServer.h>
/* INCLUDE ESP2SOTA LIBRARY */
#include <ESP2SOTA.h>

const char* ssid_server = "covid_S2";
const char* password_server = "wifi_123";

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
  /* YOUR LOOP CODE HERE */
  // HTML & CSS contents which display on web server
// HTML & CSS contents which display on web server
String HTML = "<!DOCTYPE html>\
<html>\
<body>\
<h1>My First Web Server with ESP32 - Station Mode &#128522;</h1>\
</body>\
</html>";

// Handle root url (/)
void handle_root(){
  server.send(200, "text/html", HTML);
}

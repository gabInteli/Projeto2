var id = "14bpB3xWiXSKLvj0G98KrihitnDrFBWzCa9LvV2oOv_Y";
var gid = "0";
var url =
  "https://docs.google.com/spreadsheets/d/" +
  id +
  "/gviz/tq?tqx=out:json&tq&gid=" +
  gid;

fetch(url)
  .then((response) => response.text())
  .then(
    (data) =>
      (myItems(data.slice(47, -2)))
  );

function myItems(jsonString) {
  var json = JSON.parse(jsonString);
  const lastRegister = json.table.rows[json.table.rows.length - 1];
  console.log(lastRegister.c[0].v);//Dado de Registro da Data 
  console.log(lastRegister.c[1].v);//Dado de Registro da Hora 
  console.log(lastRegister.c[2].v);//Dado de Registro do Dispositivo
  console.log(lastRegister.c[3].v);//Dado de Registo da Temperatura
  console.log(lastRegister.c[4].v);//Dado de Registro da Umidade

  json.table.cols[0].label = "Data";
  json.table.cols[1].label = "Hora";
  json.table.cols[2].label = "Dispositivo";
  json.table.cols[3].label = "Temperatura";
  json.table.cols[4].label = "Umidade";

  document.getElementById("Data").innerHTML = lastRegister.c[0].v
  document.getElementById("valorTemperatura").innerHTML = lastRegister.c[3].v
  document.getElementById("valorUmidade").innerHTML = lastRegister.c[4].v 
}

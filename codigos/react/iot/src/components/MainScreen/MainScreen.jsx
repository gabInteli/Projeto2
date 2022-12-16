import React, {useState, useEffect} from "react";
import Styles from "./MainScreen.module.css";
import { Col, Row, Space, Card } from "antd";
import "antd/dist/antd.css";
import {
  WarningOutlined,
  AlertOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import CardMenu from "./CardMenu";
import Graph3 from '../../DashboardCentral/Graph3'

const status = [
  {
    Icon: (
      <CheckCircleOutlined
        style={{ color: "green", fontSize: "24pt", backgroundColor: "#fff", marginLeft:'100%' }}
      />
    ),
  },
  {
    Icon: (
      <WarningOutlined
        style={{ color: "red", fontSize: "24pt", backgroundColor: "#fff", marginLeft:'100%' }}
      />
    ),
  },
];

export default function MainScreen(){ 
  const [show, setShow] = useState(false)
  const [temperature, setTempNow] = useState('')
  const [humidity, setHumNow] = useState('')

  console.log(humidity)

  useEffect(() => { 
  if(humidity >= '37,08' || humidity <= '26,6'){
    setShow(true)
  }
  else{
    setShow(false)
  }})

  var id = "14bpB3xWiXSKLvj0G98KrihitnDrFBWzCa9LvV2oOv_Y";
  var gid = "0";
  var url =
    "https://docs.google.com/spreadsheets/d/" +
    id +
    "/gviz/tq?tqx=out:json&tq&gid=" +
    gid;

fetch(url)
.then((response) => response.text())
.then((data) => myItems(data.slice(47, -2)));

function myItems(jsonString) {
var json = JSON.parse(jsonString);
const lastRegister = json.table.rows[json.table.rows.length - 1];

setHumNow(lastRegister.c[3].v);
setTempNow(lastRegister.c[4].v);

json.table.cols[0].label = "Data";
json.table.cols[1].label = "Hora";
json.table.cols[2].label = "Dispositivo";
json.table.cols[3].label = "Temperatura";
json.table.cols[4].label = "Umidade";
}


{
  return (
    <>
      <div className={Styles.menu}>
      <div className={Styles.container}>
        <div className={Styles.cardContainer}>
          <div className={Styles.card}>
            <CardMenu
              alert={show ? (status[1].Icon) : (status[0].Icon)}
              heading="1"
              tempText={humidity}
              humiText={temperature}
            />
          </div>
          <div className={Styles.card}>
            <CardMenu
              alert={show ? (status[0].Icon) : (status[1].Icon)}
              heading="2"
              tempText="XX"
              humiText='YY'
            />
          </div>
          <div className={Styles.card}>
            <CardMenu
              alert={show ? (status[0].Icon) : (status[1].Icon)}
              heading="3"
              tempText='XX'
              humiText='YY'
            />
          </div>
          <div className={Styles.card}>
            <CardMenu
              alert={show ? (status[0].Icon) : (status[1].Icon)}
              heading="4"
              tempText="XX"
              humiText='YY'
            />
          </div>
        </div>
      </div>
    </div>
    <Row style={{justifyContent:'center'}}>
    <Card style={{width:'93%'}}>
    <Graph3
      estufa1Temp = {[humidity]}
      estufa1Hum = {[temperature]}
    />
  </Card>
    </Row>
    
    </>
  );
}
}

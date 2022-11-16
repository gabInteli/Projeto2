import React, { Fragment } from "react";
import Image from "next/image";
import 'antd/dist/antd.css'; 
import {
  Row,
  Col,
  Card,
  Space,
  Divider,
  Button,
  Heading,
  Form,
  Input,
  Checkbox,
  Typography,
  Avatar,
} from "antd";
import { AntDesignOutlined } from '@ant-design/icons';

import { Navbar } from '../components/Navbar';

const { Title, Text } = Typography;


export default function DashboardCentral() {
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
    console.log(lastRegister.c[0].v); //Dado de Registro da Data
    console.log(lastRegister.c[1].v); //Dado de Registro da Hora
    console.log(lastRegister.c[2].v); //Dado de Registro do Dispositivo
    console.log(lastRegister.c[3].v); //Dado de Registo da Temperatura
    console.log(lastRegister.c[4].v); //Dado de Registro da Umidade

    json.table.cols[0].label = "Data";
    json.table.cols[1].label = "Hora";
    json.table.cols[2].label = "Dispositivo";
    json.table.cols[3].label = "Temperatura";
    json.table.cols[4].label = "Umidade";

    document.getElementById("Data").innerHTML = lastRegister.c[0].v;
    document.getElementById("valorTemperatura").innerHTML = lastRegister.c[3].v;
    document.getElementById("valorUmidade").innerHTML = lastRegister.c[4].v;
  }
  return (
    <Fragment>
      <Navbar/>
        <Row style={{display:'flex'}}>
        <Col span={16} style={{padding:30}}>
        <Row align='center' justify='center'>
          <Title level={1}>Casa de Vegetação 1</Title>
        </Row>
          <Card style={{backgroundColor: '#202226', borderRadius:'20pt', width: '60%'}} bordered='true' >
            <Row align='center' justify='center'>
              <Col>
                <Title level={4} style={{color:'#fff'}}>Temperatura</Title>
                <div style={{color:'#fff'}} id="valorTemperatura">json here</div>
              </Col>
              <Col>
                <Title level={4} style={{color:'#fff'}}>Umidade</Title>
                <div style={{color:'#fff'}} id="valorUmidade">json here</div>
              </Col>
            </Row>
            <Row align='center' justify='center'>
              <div style={{color:'#fff'}} id="Data">json here</div>
            </Row>
          </Card>
        </Col>
        <Col span={7} style={{padding:30}}>
          <Space direction='vertical'>
          <Card bordered='true'>
            <Title level={3}>Seleção de Abertura</Title>
          </Card>
          <Card bordered='true'>
            <Title level={3}>Seleção de Contato</Title>
            <Row>
            <Space direction='horizontal' size={10}>
            <Col>
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={<AntDesignOutlined />}
            />
            </Col>
            <Col>
              <Title style={{margin:0}} level={4}>Nome</Title>
              <Title style={{margin:0}} level={5}>Numero</Title>
              <Text>Cargo</Text>
            </Col>
            </Space>
            </Row>
          </Card>
          </Space>
        </Col>
        </Row>
    </Fragment>
  );
}

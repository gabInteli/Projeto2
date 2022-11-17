import React, { Fragment, useState } from "react";
import Image from "next/image";
import "antd/dist/antd.css";
import {Row, Col, Card, Space, Divider, Button, Heading, Form, Input, Checkbox, Typography, Avatar, Radio} from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { GiGreenhouse } from "react-icons/gi";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";

import { Navbar } from "../components/Navbar";

const { Title, Text } = Typography;

export default function DashboardCentral() {
  const [value, setValue] = useState(1);
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
    console.log(json);
    const lastRegister = json.table.rows[json.table.rows.length - 1];
    // console.log(lastRegister.c[0].v); //Dado de Registro da Data
    // console.log(lastRegister.c[1].v); //Dado de Registro da Hora
    // console.log(lastRegister.c[2].v); //Dado de Registro do Dispositivo
    // console.log(lastRegister.c[3].v); //Dado de Registo da Temperatura
    // console.log(lastRegister.c[4].v); //Dado de Registro da Umidade

    json.table.cols[0].label = "Data";
    json.table.cols[1].label = "Hora";
    json.table.cols[2].label = "Dispositivo";
    json.table.cols[3].label = "Temperatura";
    json.table.cols[4].label = "Umidade";

    document.getElementById("Data").innerHTML = lastRegister.c[0].v;
    document.getElementById("valorTemperatura").innerHTML = lastRegister.c[3].v;
    document.getElementById("valorUmidade").innerHTML = lastRegister.c[4].v;
  }

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Fragment>
      <Navbar />
      <Row style={{ display: "flex" }}>
        <Col span={18} style={{ padding: 30 }}>
        <div style={{ height: "70vh", overflowY: "scroll",display:'flex', justifyContent:'center' }}>
            <Card
              style={{
                backgroundColor: "#fff",
                border: "solid 1pt rgb(133, 133, 133)",
                borderRadius: "20pt",
                width: "60%",
                height:'45vh'
              }}
              bordered="true"
            >
              <Row align="bottom" justify="center">
                <Space direction="horizontal">
                  <GiGreenhouse style={{ fontSize: "32pt" }} />
                  <Title level={1}>Casa de Vegetação 1</Title>
                </Space>
              </Row>
              <Row align="middle" justify="center">
                <Col>
                  <Row alignment="middle">
                    <Col>
                      <DeviceThermostatIcon
                        style={{ fontSize: "32pt", marginTop: "20%" }}
                      />
                    </Col>
                    <Col>
                      <div style={{ fontSize: "32pt" }} id="valorTemperatura">
                        json here
                      </div>
                    </Col>
                  </Row>
                  <Row alignment="middle">
                    <OpacityOutlinedIcon
                      style={{ fontSize: "32pt", marginTop: "5%" }}
                    />
                    <div style={{ fontSize: "32pt" }} id="valorUmidade">
                      json here
                    </div>
                  </Row>
                </Col>
              </Row>
              <Row align="center" justify="center">
                <Text>
                  <div id="Data">json here</div>
                </Text>
              </Row>
            </Card>
          </div>
        </Col>
        <Col span={6} style={{ padding: 30 }}>
          <Space direction="vertical">
            <Card bordered="true">
              <Title level={4}>Seleção da Abertura</Title>
              <Radio.Group onChange={onChange} value={value}>
                <Space direction='vertical' size={5}>
                <Radio value={1}>Option A</Radio>
                <Radio value={2}>Option B</Radio>
                <Radio value={3}>Option C</Radio>
                </Space>
              </Radio.Group>
            </Card>
            <Card bordered="true">
              <Title level={4}>Seleção de Contato</Title>
              <Space direction="vertical" size={5}>
              <Row>
                <Space direction="horizontal" size={10}>
                  <Col>
                    <Avatar
                      size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 80,
                        xxl: 100,
                      }}
                      icon={<AntDesignOutlined />}
                    />
                  </Col>
                  <Col>
                      <Title style={{ margin: 0 }} level={5}>Nome</Title>
                      <Text style={{ margin: 0, fontSize: '12pt'}}>Numero</Text>
                      <br></br>
                      <Text>Cargo</Text>
                  </Col>                  
                </Space>
              </Row>
              <Row>
                <Space direction="horizontal" size={10}>
                  <Col>
                    <Avatar
                      size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 80,
                        xxl: 100,
                      }}
                      icon={<AntDesignOutlined />}
                    />
                  </Col>
                  <Col>
                      <Title style={{ margin: 0 }} level={5}>Nome</Title>
                      <Text style={{ margin: 0, fontSize: '12pt'}}>Numero</Text>
                      <br></br>
                      <Text>Cargo</Text>
                  </Col>                  
                </Space>
              </Row>
              <Row>
                <Space direction="horizontal" size={10}>
                  <Col>
                    <Avatar
                      size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 80,
                        xxl: 100,
                      }}
                      icon={<AntDesignOutlined />}
                    />
                  </Col>
                  <Col>
                      <Title style={{ margin: 0 }} level={5}>Nome</Title>
                      <Text style={{ margin: 0, fontSize: '12pt'}}>Numero</Text>
                      <br></br>
                      <Text>Cargo</Text>
                  </Col>                  
                </Space>
              </Row>
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
    </Fragment>
  );
}

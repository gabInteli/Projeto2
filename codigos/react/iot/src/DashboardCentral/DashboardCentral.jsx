import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import "antd/dist/antd.css";
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
  Radio,
  InputNumber,
  Modal,
  Menu,
  Layout
} from "antd";
import {
  AntDesignOutlined,
  UserOutlined,
  WarningOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { GiGreenhouse } from "react-icons/gi";
import { Line } from "@ant-design/plots";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import { AiOutlineInfoCircle, AiOutlineFile, AiOutlineHome} from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import Styles from '../components/Sidebar/Sidebar.module.css'
const { Header, Content, Footer, Sider } = Layout;

import Graph from "./Graph";
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";
import { Sidebar } from "../components/Sidebar";

const { Title, Text } = Typography;

export default function DashboardCentral() {
  const [form] = Form.useForm();

  const [value, setValue] = useState(1);
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [hours, setHours] = useState([]);
  const [temperatures, setTemperatures] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [parametro, setParametro] = useState(5);
  const [tempNow, setTempNow] = useState(0.0);
  const [humNow, setHumNow] = useState(0.0);
  const [cargo, setCargo] = useState('');
  const [number, setNumber] = useState('');
  const [dados, setDados] = useState({})

  function getItem(label, key, icon, children, disabled) {
    return {
      key,
      icon,
      children,
      label,
      disabled, 
    };
  }

const items = [
    getItem('Home', '1', <AiOutlineHome />),
    getItem('Documentação', '2', <AiOutlineFile />),
    getItem('Sobre', '3', <AiOutlineInfoCircle />),
]

  var id = "14bpB3xWiXSKLvj0G98KrihitnDrFBWzCa9LvV2oOv_Y";
  var gid = "0";
  var url =
    "https://docs.google.com/spreadsheets/d/" +
    id +
    "/gviz/tq?tqx=out:json&tq&gid=" +
    gid;


  const onFinish = (values) => {
    console.log("Success:", values);
    setParametro(values.param);


    fetch(url)
      .then((response) => response.text())
      .then((data) => myItems(data.slice(47, -2)));

    function myItems(jsonString) {
      var json = JSON.parse(jsonString);
      const lastRegister = json.table.rows[json.table.rows.length - 1];

      var param = parametro;

      setHumNow(lastRegister.c[3].v);
      console.log(humNow);
      setTempNow(lastRegister.c[4].v);
      console.log(tempNow >= 20 ? true : false);

      var hora10 = json.table.rows[json.table.rows.length - 1].c[1];
      var hora9 = json.table.rows[json.table.rows.length - param].c[1];
      var hora8 = json.table.rows[json.table.rows.length - 2 * param].c[1];
      var hora7 = json.table.rows[json.table.rows.length - 3 * param].c[1];
      var hora6 = json.table.rows[json.table.rows.length - 4 * param].c[1];
      var hora5 = json.table.rows[json.table.rows.length - 5 * param].c[1];
      var hora4 = json.table.rows[json.table.rows.length - 6 * param].c[1];
      var hora3 = json.table.rows[json.table.rows.length - 7 * param].c[1];
      var hora2 = json.table.rows[json.table.rows.length - 8 * param].c[1];
      var hora1 = json.table.rows[json.table.rows.length - 9 * param].c[1];

      var temp10 = json.table.rows[json.table.rows.length - 1].c[3];
      var temp9 = json.table.rows[json.table.rows.length - param].c[3];
      var temp8 = json.table.rows[json.table.rows.length - 2 * param].c[3];
      var temp7 = json.table.rows[json.table.rows.length - 3 * param].c[3];
      var temp6 = json.table.rows[json.table.rows.length - 4 * param].c[3];
      var temp5 = json.table.rows[json.table.rows.length - 5 * param].c[3];
      var temp4 = json.table.rows[json.table.rows.length - 6 * param].c[3];
      var temp3 = json.table.rows[json.table.rows.length - 7 * param].c[3];
      var temp2 = json.table.rows[json.table.rows.length - 8 * param].c[3];
      var temp1 = json.table.rows[json.table.rows.length - 9 * param].c[3];

      var umid10 = json.table.rows[json.table.rows.length - 1].c[4];
      var umid9 = json.table.rows[json.table.rows.length - param].c[4];
      var umid8 = json.table.rows[json.table.rows.length - 2 * param].c[4];
      var umid7 = json.table.rows[json.table.rows.length - 3 * param].c[4];
      var umid6 = json.table.rows[json.table.rows.length - 4 * param].c[4];
      var umid5 = json.table.rows[json.table.rows.length - 5 * param].c[4];
      var umid4 = json.table.rows[json.table.rows.length - 6 * param].c[4];
      var umid3 = json.table.rows[json.table.rows.length - 7 * param].c[4];
      var umid2 = json.table.rows[json.table.rows.length - 8 * param].c[4];
      var umid1 = json.table.rows[json.table.rows.length - 9 * param].c[4];

      var listHours = [
        hora1.v,
        hora2.v,
        hora3.v,
        hora4.v,
        hora5.v,
        hora6.v,
        hora7.v,
        hora8.v,
        hora9.v,
        hora10.v,
      ];
      var listTemperatures = [
        temp1.v,
        temp2.v,
        temp3.v,
        temp4.v,
        temp5.v,
        temp6.v,
        temp7.v,
        temp8.v,
        temp9.v,
        temp10.v,
      ];
      var listHumidities = [
        umid1.v,
        umid2.v,
        umid3.v,
        umid4.v,
        umid5.v,
        umid6.v,
        umid7.v,
        umid8.v,
        umid9.v,
        umid10.v,
      ];

      setHours(listHours);
      setTemperatures(listTemperatures);
      setHumidity(listHumidities);

      json.table.cols[0].label = "Data";
      json.table.cols[1].label = "Hora";
      json.table.cols[2].label = "Dispositivo";
      json.table.cols[3].label = "Temperatura";
      json.table.cols[4].label = "Umidade";

      document.getElementById("Data").innerHTML = lastRegister.c[0].v;
      document.getElementById("valorTemperatura").innerHTML =
        lastRegister.c[3].v;
      document.getElementById("valorUmidade").innerHTML = lastRegister.c[4].v;
    }
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const btn1 = () => {
    setButton1(true) && setButton2(false) && setButton3(false);
  };
  const btn2 = () => {
    setButton2(true) && setButton1(false) && setButton3(false);
  };
  const btn3 = () => {
    setButton3(true) && setButton2(false) && setButton1(false);
  };

  const buttonMessage = () => {
    console.log(value);
    if (button1) {
      if (value == 1) {
        window.location.href =
          "https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Analista%20de%20Dados,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%2050%&type=phone_number&app_absent=0";
      } else if (value == 2) {
        window.location.href =
          "https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Analista%20de%20Dados,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%20100%&type=phone_number&app_absent=0";
      } else if (value == 3) {
        window.location.href =
          "https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Analista%20de%20Dados,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20Ambas%20as%20Janelas&type=phone_number&app_absent=0";
      }
    } else if (button2) {
      if (value == 1) {
        window.location.href =
          "https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Supervisor,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%2050%&type=phone_number&app_absent=0";
      } else if (value == 2) {
        window.location.href =
          "https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Supervisor,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%20100%&type=phone_number&app_absent=0";
      } else if (value == 3) {
        window.location.href =
          "https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Supervisor,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Ambas%20Janelas&type=phone_number&app_absent=0";
      }
    } else if (button3) {
      if (value == 1) {
        window.location.href =
          "https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Coordenador,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%2050%&type=phone_number&app_absent=0";
      } else if (value == 2) {
        window.location.href =
          "https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Coordenador,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%20100%&type=phone_number&app_absent=0";
      } else if (value == 3) {
        window.location.href =
          "https://api.whatsapp.com/send/?phone=5515997165061&text=Ol%C3%A1%20Coordenador,%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Ambas%20Janelas&type=phone_number&app_absent=0";
      }
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };


  const onFinishModalForm = (values) => {
    setDados(values);

    var url1 = "https://api.whatsapp.com/send/?phone=55"+ dados['phone'] + "&text=Ol%C3%A1%20" + dados['ocupation'] + ",%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%2050%&type=phone_number&app_absent=0"

    var url2 = "https://api.whatsapp.com/send/?phone=55"+dados['phone']+"&text=Ol%C3%A1%20"+dados['ocupation']+",%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Janelas%20Laterais%20em%20100%&type=phone_number&app_absent=0";

    var url3 = "https://api.whatsapp.com/send/?phone=55"+dados['phone']+"&text=Ol%C3%A1%20"+dados['ocupation']+",%20a%20temperatura%20esta%20acima%20do%20esperado,%20por%20favor%20abra%20as%20Ambas%20Janelas&type=phone_number&app_absent=0"

    setIsModalOpen(false);
    if (value == 1) {
      setTimeout(() => {
        window.location.href = url1
      }, "5000") 
    } else if (value == 2) {
      setTimeout(() => {
        window.location.href = url2
      }, "5000") 
    } else if (value == 3) {
      setTimeout(() => {
        window.location.href = url3
      }, "5000") 
    }
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
    <Sidebar>
    <Layout style={{backgroundColor: '#E8E8E8'}}>
        <div
          style={{
            height: 'auto',
            marginLeft:'5%',
          }}
        >
          <Row style={{ backgroundColor: "#E8E8E8", height: "auto" }}>
        <Col span={16} style={{ marginTop: 25 }}>
          <div style={{ overflowY: "scroll", height: "100vh" }}>
            <Row style={{ justifyContent: "center" }}>
              <Space direction="vertical" size={20}>
                <Card
                  style={{
                    backgroundColor: "#fff",
                    width: "90%",
                    height: "auto",
                  }}
                >
                  <Row>
                    <Title level={5}> Definição de Intervalo:</Title>
                    <Text>
                      Por favor, defina qual é o intervalo de tempo o qual
                      gostaria de ver as informações exibidas nos gráficos de
                      Temperatura e Umidade.
                    </Text>
                  </Row>
                  <Row style={{ marginTop: "5%" }}>
                    <Form
                      form={form}
                      size="large"
                      name="basic"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      autoComplete="off"
                      style={{ display: "flex" }}
                    >
                      <Form.Item name="param">
                        <InputNumber style={{ width: "330px" }} />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{
                            borderRadius: "20px",
                            backgroundColor: "#2B3B15",
                            border: "none",
                            marginLeft: "5%",
                          }}
                          size="large"
                        >
                          Carregar Dados
                        </Button>
                      </Form.Item>
                    </Form>
                  </Row>
                </Card>
                <Card
                  style={{
                    backgroundColor: "#fff",
                    width: "90%",
                    height: "50vh",
                  }}
                  bordered="true"
                >
                  <Row style={{ justifyContent: "space-between" }}>
                    <Col>
                      <Title level={2}>1</Title>
                    </Col>
                    <Col>
                      <Title level={1}>
                        <CheckCircleOutlined style={{ color: "green" }} />
                      </Title>
                    </Col>
                  </Row>
                  <Row align="bottom" justify="center">
                    <Space direction="horizontal">
                      <GiGreenhouse
                        style={{ fontSize: "32pt", color: "green" }}
                      />
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
                          <div
                            style={{ fontSize: "32pt" }}
                            id="valorTemperatura"
                          >
                            Temperatura
                          </div>
                        </Col>
                      </Row>
                      <Row alignment="middle">
                        <OpacityOutlinedIcon
                          style={{ fontSize: "32pt", marginTop: "5%" }}
                        />
                        <div style={{ fontSize: "32pt" }} id="valorUmidade">
                          Umidade
                        </div>
                      </Row>
                    </Col>
                  </Row>
                  <Row align="center" justify="center">
                    <Text>
                      <div id="Data">Data e Horário de Registro</div>
                    </Text>
                  </Row>
                </Card>
                <Card
                  style={{
                    backgroundColor: "#fff",
                    width: "90%",
                    height: "auto",
                  }}
                >
                  <Row style={{ justifyContent: "center" }}>
                    <Graph2
                      dataHours={hours}
                      dataTemperature={temperatures}
                      dataHumidity={humidity}
                    />
                  </Row>
                </Card>
                <Card
                  style={{
                    backgroundColor: "#fff",
                    width: "90%",
                    height: "auto",
                  }}
                >
                  <Row style={{ justifyContent: "center" }}>
                    <Graph
                      dataHours={hours}
                      dataTemperature={temperatures}
                      dataHumidity={humidity}
                    />
                  </Row>
                </Card>
              </Space>
            </Row>
          </div>
        </Col>
        <Col span={5} style={{paddingLeft:'1%'}}>
          <Space direction="vertical">
            <Row></Row>
            <Card bordered="true">
              <Title level={4}>Seleção da Abertura</Title>
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical" size={5}>
                  <Radio size="large" value={1} style={{ textJustify: "left" }}>
                    Abrir 50% das Janelas Laterais.
                  </Radio>
                  <Radio size="large" value={2} style={{ textJustify: "left" }}>
                    Abrir 100% das Janelas Laterais.
                  </Radio>
                  <Radio size="large" value={3} style={{ textJustify: "left" }}>
                    Abrir todas as Janelas.
                  </Radio>
                </Space>
              </Radio.Group>
            </Card>
            <Card bordered="true" style={{ marginTop: "10%" }}>
              <Title level={4}>Seleção de Contato</Title>
              <Space direction="vertical" size={5}>
                <Row>
                  <Button
                    onClick={btn1}
                    type="default"
                    style={{ width: "19vw", height: "30%" }}
                  >
                    <Space direction="horizontal" size={10}>
                      <Col style={{ textAlign: "left" }}>
                        <Avatar size={50} icon={<UserOutlined />} />
                      </Col>
                      <Col style={{ textAlign: "left" }}>
                        <Title style={{ margin: 0 }} level={5}>
                          Nome Sobrenome
                        </Title>
                        <Text style={{ margin: 0, fontSize: "11pt" }}>
                          Numero
                        </Text>
                        <br></br>
                        <Text>Analista de Dados</Text>
                      </Col>
                    </Space>
                  </Button>
                </Row>
                <Row>
                  <Button
                    onClick={btn2}
                    type="default"
                    style={{ width: "19vw", height: "30%" }}
                  >
                    <Space direction="horizontal" size={10}>
                      <Col style={{ textAlign: "left" }}>
                        <Avatar size={50} icon={<UserOutlined />} />
                      </Col>
                      <Col style={{ textAlign: "left" }}>
                        <Title style={{ margin: 0 }} level={5}>
                          Nome Sobrenome
                        </Title>
                        <Text style={{ margin: 0, fontSize: "11pt" }}>
                          Numero
                        </Text>
                        <br></br>
                        <Text>Supervisor</Text>
                      </Col>
                    </Space>
                  </Button>
                </Row>
                <Row>
                  <Button
                    onClick={btn3}
                    type="default"
                    style={{ width: "19vw", height: "30%" }}
                  >
                    <Space direction="horizontal" size={10}>
                      <Col style={{ textAlign: "left" }}>
                        <Avatar size={50} icon={<UserOutlined />} />
                      </Col>
                      <Col style={{ textAlign: "left" }}>
                        <Title
                          style={{ margin: 0, textJustify: "left" }}
                          level={5}
                        >
                          Nome Sobrenome
                        </Title>
                        <Text
                          style={{
                            margin: 0,
                            fontSize: "11pt",
                            textJustify: "left",
                          }}
                        >
                          Numero
                        </Text>
                        <br></br>
                        <Text style={{ textJustify: "left" }}>Coordenador</Text>
                      </Col>
                    </Space>
                  </Button>
                </Row>
                <Row style={{ justifyContent: "end", marginTop: 10 }}>
                  <Col span={17}>
                    <Button
                      type="primary"
                      style={{
                        backgroundColor: "#2B3B15",
                        border: "none",
                        borderRadius: "15pt",
                      }}
                      onClick={showModal}
                    >
                      + Contato
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="primary"
                      style={{
                        backgroundColor: "#262925",
                        border: "none",
                        borderRadius: "15pt",
                      }}
                      onClick={buttonMessage}
                    >
                      Enviar
                    </Button>
                  </Col>
                </Row>
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
          
        </div>
    </Layout>
  </Sidebar>

      
      <Modal
        title="Contato Personalizado"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={['']}
      >
        <Space direction="vertical" size={10}>
        <Row>
          <Text>
            Aqui você poderá definir um número diferente dos diponíveis para
            enviar uma mensagem via WhatsApp de alerta referente ao
            funcionamento das Estufas.
          </Text>
        </Row>
        <Row>
          <Text>
            Por favor, indique o Cargo e o número da pessoa que receberá a
            mensagem:
          </Text>
        </Row>
        <Form
          form={form}
          size="large"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinishModalForm}
          autoComplete="off"
        >
          <Title level={4}>Cargo do Contato:</Title>
          <Form.Item name='ocupation'>
            <Input placeholder="Exemplo: Analista de Dados"></Input>
          </Form.Item>
          <Title level={4}>Número de Telefone:</Title>
          <Form.Item name='phone'>
            <Input placeholder="Exemplo: 1123456789"></Input>
          </Form.Item>
          <Row justifyContent='end'>
          <Form.Item>
          <Button type="primary"
          htmlType="submit"
          style={{
            borderRadius: "20px",
            backgroundColor: "#2B3B15",
            border: "none",
            marginLeft: "5%",
          }}
          size="large">
            Enviar
          </Button>
          </Form.Item>
          </Row>
        </Form>
        </Space>
      </Modal>
    </Fragment>
  );
}

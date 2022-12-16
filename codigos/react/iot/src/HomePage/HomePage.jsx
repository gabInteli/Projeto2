import React, { Fragment, useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import {DatabaseOutlined} from '@ant-design/icons';
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import TimelineIcon from '@mui/icons-material/Timeline';
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
} from "antd";

const { Title, Text } = Typography;

import header from "../../public/img/image3.png";
import art1 from "../../public/img/image4.png";
import art2 from "../../public/img/image5.png";
import art3 from "../../public/img/image6.png";
import seta1 from "../../public/img/seta1.png";
import seta2 from "../../public/img/seta2.png";
import section3 from "../../public/img/image2.png";
import logoGerdau from "../../public/img/c2po-logo-invertido.png";

export default function HomePage() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Fragment>
      <Row
        style={{
          backgroundColor: "#347c40",
          height: 80,
          alignContent: "center",
          borderBottom: "solid 0.5pt #fff",
        }}
      >
        <Col offset={2} span={20}>
          <Image src={logoGerdau} width={100} />
        </Col>
        <Space direction="horizontal" size={20}>
          <Col>
            <Button style={{ borderRadius: 10 }} href='/login'>Login</Button>
          </Col>
        </Space>
      </Row>
      <Row
        style={{
          padding: 50,
          alignContent: "center",
          backgroundColor: "#347c40",
        }}
      >
        <Col style={{ alignContent: "center", padding: 50 }} span={13}>
          <Space direction="vertical" size={20}>
            <Title style={{ fontSize: 64, color: "#fff", fontStyle: "italic" }}>
              {" "}
              WE ARE GROOT !
            </Title>
            <Row>
              <Col span={20}>
                <Text style={{ fontSize: 16, color: "#fff" }}>
                  Somos uma plataforma para gestão de informações sobre
                  propriedades físicas de estufas, como leitura de dados
                  referentes a temperatura e umdiade.
                </Text>
              </Col>
            </Row>
            <Row>
              <Button style={{ borderRadius: 10 }} href='/login'>Realizar Login</Button>
            </Row>
          </Space>
        </Col>
        <Col>
          <Image src={header} width={500} />
        </Col>
      </Row>
      <Row
        style={{
          padding: 50,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Title style={{ fontSize: 32, color: "#000", fontStyle: "italic" }}>
          {" "}
          Você encontrará por aqui!
        </Title>
      </Row>
      <Row
        style={{
          padding: 20,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Row>
          <Space direction="horizontal" size={15}>
            <Col>
              <Image src={seta1} width={250} />
            </Col>
            <Col>
              <Image src={art1} width={250} />
            </Col>
            <Col>
              <Image src={art2} width={250} />
            </Col>
            <Col>
              <Image src={art3} width={250} />
            </Col>
            <Col>
              <Image src={seta2} width={250} />
            </Col>
          </Space>
        </Row>
      </Row>
      <Row
        style={{
          padding: 20,
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "#FCFCFC",
          marginTop: 50,
        }}
      >
        <Col>
          <Title level={4}></Title>
          <Image src={section3} width={500} />
        </Col>
        <Col>
        <Space direction="vertical" size={30}>
        <Card>
            <Row>
              <Space>
                <Col
                  style={{
                    backgroundColor: "#347c40",
                    borderRadius: 5,
                    width: 30,
                    height: 30,
                    padding: 2,
                  }}
                >
                  <DeviceThermostatIcon style={{ color: "#fff" }} />
                </Col>
                <Col>
                  <Text style={{ fontSize: 16 }}>
                    Medição de Parâmetros de Temperatura do Ambiente
                  </Text>
                </Col>
              </Space>
            </Row>
          </Card>
          <Card>
            <Row>
              <Space>
                <Col
                  style={{
                    backgroundColor: "#347c40",
                    borderRadius: 5,
                    width: 30,
                    height: 30,
                    padding: 2,
                  }}
                >
                  <OpacityOutlinedIcon style={{ color: "#fff" }} />
                </Col>
                <Col>
                  <Text style={{ fontSize: 16 }}>
                    Medição de Parâmetros de Umidade do Ambiente
                  </Text>
                </Col>
              </Space>
            </Row>
          </Card>
          <Card>
            <Row>
              <Space>
                <Col
                  style={{
                    backgroundColor: "#347c40",
                    borderRadius: 5,
                    width: 30,
                    height: 30,
                    padding: 5,
                  }}
                >
                  <DatabaseOutlined  style={{ color: "#fff", fontSize: 18 }} />
                </Col>
                <Col>
                  <Text style={{ fontSize: 16 }}>
                   Histórico de Dados
                  </Text>
                </Col>
              </Space>
            </Row>
          </Card>
          <Card>
            <Row>
              <Space>
                <Col
                  style={{
                    backgroundColor: "#347c40",
                    borderRadius: 5,
                    width: 30,
                    height: 30,
                    padding: 2,
                  }}
                >
                  <TimelineIcon  style={{ color: "#fff"}} />
                </Col>
                <Col>
                  <Text style={{ fontSize: 16 }}>
                   Gráficos de Visualização
                  </Text>
                </Col>
              </Space>
            </Row>
          </Card>
        </Space>
        </Col>
      </Row>
      <Row style={{justifyContent:'center', height:'70vh', marginTop:100}}>
        <Row style={{backgroundImage: "url(/img/footer.png)", backgroundRepeat: "no-repeat", width:'100vw', marginLeft:'20%', padding:50}}>
        <Col style={{paddingTop:50}} span={7}>
            <Text style={{color:'#fff', fontSize:36}}>Venha conhecer o <strong>GROOT</strong>!</Text>
            <Row>
                <Button style={{ borderRadius: 10 }} href='/login'>Realizar Login</Button>
            </Row>
        </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

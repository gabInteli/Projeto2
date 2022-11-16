import React from "react";
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
} from "antd";

const { Title } = Typography;

import background from "../../public/img/backgroundLogin.png";
import SizeContext from "antd/lib/config-provider/SizeContext";

export default function LoginPage() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ display: "flex" }}>
      <Col
        style={{
          backgroundImage: "url(/img/backgroundLogin.png)",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "contain",
          width: "50vw",
        }}
      >
        <Col>
          <Title style={{ margin: 0, fontSize: "4em", color:'#fff'}} level={1}>
            Começe 
          </Title>
          <Title style={{ margin: 0, fontSize: "4em", color:'#fff'}} level={1}>
            sua jornada !
          </Title>
        </Col>
      </Col>
      <Col>
        <Row
          style={{
            width: "50vw",
            backgroundImage: "url(/img/imageG.png)",
            backgroundRepeat: "no-repeat",
            height: "30vh",
            backgroundSize: "contain",
            backgroundPosition: "right top",
          }}
        ></Row>
        <Row justify='center' style={{display:'flex'}}>
          <Title level={2}>Login</Title>
        </Row>
        <Row justify='center'>
          <Col>
            <Form
              form={form}
              size="large"
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Nome de Usuário"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Por favor, digite seu nome de usuário",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Senha"
                name="password"
                rules={[
                  { required: true, message: "Por favor, digite sua senha" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Lembrar de mim</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Acessar
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

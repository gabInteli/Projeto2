import React from "react";
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
} from "antd";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

import background from "../../public/img/backgroundLogin.png";
import SizeContext from "antd/lib/config-provider/SizeContext";
import logoC2PO from "../../public/img/logo-c2po.png"

export default function LoginPage() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row
      style={{
        display: "flex",
        backgroundImage: "url(/img/background-login.png)",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Col style={{paddingTop:'30px', paddingLeft:'50px'}}>
      <Card style={{height: "90vh", width:'40vw', borderRadius:'10px'}}>
      <Row style={{justifyContent:'center', marginTop:'5%'}}>
          <Image src={logoC2PO} width={100} height={100}></Image>
        </Row>
        <Row justify="center" style={{ display: "flex" }}>
          <Title level={2}>Login</Title>
        </Row>
        <Row justify="center">
          <Col span={15}>
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
              <Title level={5}>Nome de Usuário</Title>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Por favor, digite seu nome de usuário",
                  },
                ]}
              >
                {" "}
                <Row>
                  <Input placeholder = 'Nome de Usuário' prefix={<UserOutlined />} />
                </Row>
              </Form.Item>

              <Title level={5}>Senha</Title>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Por favor, digite sua senha"},
                ]}
              >
                <Input.Password placeholder = 'Senha' prefix={<LockOutlined />} />
              </Form.Item>
              <Row>
                <Col span={16}>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Lembrar de mim</Checkbox>
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#2B3B15",
                      border: "none",
                      width: "100px",
                    }}
                    size="large"
                  >
                    <a href="/dashboard">Entrar</a>
                  </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
      </Col>
    </Row>
  );
}

import React from "react";
import { Navbar } from "../components/Navbar";
import { DownOutlined, LockOutlined } from '@ant-design/icons';
import { GrWifi, GrWifiLow, GrWifiMedium} from 'react-icons/gr';
import { Button, Dropdown, message, Space, Form, Typography, Col, Row, Input } from 'antd';
import { useState } from "react";
import 'antd/dist/antd.css'; 

const {Text} = Typography;

export default function ConfigurationsPage() {

    const [isShown, setIsShown] = useState(false);
    let [chave, setChave] = useState(0);
    const [form] = Form.useForm();
    const [texto, setTexto] = useState(false);

    // Funções para o menu dropdown
    const handleMenuClick = (key) => {
        message.info(`Rede ${key.key} selecionada.`);
        {setTexto(!texto)}
        const valor = key.key
        setChave(valor);

      };

      console.log(chave)

    const items = [
    { label: 'Rede 1', key: '1', icon: <GrWifiMedium />},
    { label: 'Rede 2', key: '2', icon: <GrWifiLow />},
    { label: 'Rede 3', key: '3', icon: <GrWifiMedium />},
        ];
        
     const handleFormClick = event => {
        setIsShown(current => !current);
    };
    
      const menuProps = {
        items,
        onClick: handleMenuClick
      };
    // Funções para o form de senha
    const onFinish = (values) => {
        console.log("Success:", values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

    return (
        <>
        <Navbar />
        <Col>
            <Row justify="center" style={{display:"flex", marginTop:"150px", justifyContent:"center"}}>

                <GrWifi style={{width:"35px", height:"35px", marginRight:"20px", marginTop:"8px" }} />

                <Dropdown menu={menuProps}>
                    <Button style={{width:"280px", height:"50px" }}>
                        <Space onClick={handleFormClick} style={{fontSize:"25px"}}>
                            {texto ? (<Text>Rede {chave}</Text>) : (<Text> Selecione a Rede</Text>) }
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            </Row>
        </Col>

        <Row justify="center" style={{marginTop:"20px", marginLeft:"55px"}}>
            <Col>
                {isShown && <Form
                form={form}
                size="large"
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Text style={{marginLeft:"20px"}}>Insira a chave de segurança da rede</Text>
                <Form.Item
                 name="password"
                rules={[
                { required: true, message: "Por favor, digite sua senha" },
                ]}
                 >
                <Input.Password prefix={<LockOutlined/>}/>
                </Form.Item>
                </Form>}
            </Col>
        </Row>
        </>
    )
}
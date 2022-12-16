import React from "react";
import { Sidebar } from '../components/Sidebar';
import { Row, Typography, Card } from "antd";

const { Title, Text } = Typography; 

const AboutPage = () => {
    return(
        <Sidebar>
            <Card title="Sobre" style={{ width: 700, marginBottom:'20px', marginLeft:'130px'}}>
                <Row>
                    <Text>Desenvolvido mediante uma parceria entre o Inteli e a Gerdau Florestal, Groot é um projeto que visa sanar uma das principais dores que o parceiro sofre: o intervalo longo de medição das condições do ambiente das casas de vegetação da empresa.</Text>
                </Row>
                <Row>
                    <Text>Com a utilização do Groot é possível maximizar a qualidade de vida das mudas das estufas, semi-automatizando o processo de medição do ambiente de minuto a minuto e, consequentemente, aumentando a granularidade e confiabilidade de dados.</Text>
                </Row>
            </Card>
            <Card title="Desenvolvedores" style={{width: 700, marginLeft:'130px'}}>
                <Row>
                    <a target='_blank' href='https://www.linkedin.com/in/gustavo-pereira1/'>Gustavo Pereira</a>
                </Row>
                <Row>
                    <a target='_blank' href='https://www.linkedin.com/in/gabriela-rodrigues-matias/'>Gabriela Rodrigues</a>
                </Row>
                <Row>
                    <a target='_blank' href='https://www.linkedin.com/in/matheusmacedosantos/'>Matheus Macedo</a>
                </Row>
                <Row>
                    <a target='_blank' href='https://www.linkedin.com/in/maria-lu%C3%ADsa-maia-14384a212/'>Maria Luísa Maia</a>
                </Row>
                <Row>
                    <a target='_blank' href='https://www.linkedin.com/in/pedro-gattai-096678227'>Pedro Gattai</a>
                </Row>
                <Row>
                    <a target='_blank' href='https://www.linkedin.com/in/raduanmuarrek/'>Raduan Muarrek</a>
                </Row>
                <Row style={{height:'5vh'}}>
                    <a target='_blank' href='https://www.linkedin.com/in/emanuel-45b637185/'>Emanuel Oliveira</a>
                </Row>
            </Card>
            <h1 style={{height:'8vh'}}></h1>
        </Sidebar>
    )
}

export default AboutPage
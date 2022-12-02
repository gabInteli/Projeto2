import React, { Fragment } from "react";
import Styles from "./MainScreen.module.css";
import { Typography, Row, Col, Avatar, Button } from "antd";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import { AiOutlineDownload } from 'react-icons/ai'
import { padding } from "@mui/system";

const { Title, Text } = Typography;

export default function CardMenu({ icon, heading, tempText, humiText, alert, date }) {
  return (
    <Fragment>
      <Row>
        <Col span={20}>
          <div className={Styles.icon && Styles.container}>{icon}</div>
          <Row style = {{justifyContent:'space-between', marginTop:"30px"}}>
            <Col><Title level={4} >{heading}</Title></Col>
            <Col >{alert}</Col>
          </Row>
          <Row style = {{justifyContent:'center', marginTop:"-15px"}}><Col><DeviceThermostatIcon style={{fontSize:'24pt', marginTop:'25%'}} /></Col><Col><Text style={{fontSize:'24pt'}}>{tempText}</Text></Col></Row>
          <Row style = {{justifyContent:'center'}}><OpacityOutlinedIcon style={{fontSize:'24pt', marginTop:'5%'}} /><Text style={{fontSize:'24pt'}}>{humiText}</Text></Row>
          <Row style = {{justifyContent:'center', marginLeft:"22px"}}><Button style={{borderRadius: "20px", backgroundColor:'#A4A4A4', border: "none", color: 'white'}}>Download CSV <AiOutlineDownload /></Button></Row>
        </Col>
      </Row>
    </Fragment>
  );
}

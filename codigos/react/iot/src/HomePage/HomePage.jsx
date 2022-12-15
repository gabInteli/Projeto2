import React, {useState} from "react";
import Image from "next/image";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsGear} from 'react-icons/bs'
import Styles from '../components/Navbar/Navbar.module.css';

import logoGerdau from '../../public/img/c2po-logo-invertido.png'

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
import {Navbar} from '../components/Navbar'

const { Title } = Typography;

import background from "../../public/img/backgroundLogin.png";
import SizeContext from "antd/lib/config-provider/SizeContext";
import logoC2PO from "../../public/img/logo-c2po.png"

export default function HomePage() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className={Styles.navbar}>
    <div className={Styles.container}>
        <Image src={logoGerdau} width={200}/>            
            <ul className={click ? 'nav active' : 'nav'} style={{display:'flex'}}>
            <li className={Styles.nav}>
                <a style={{color: '#f4eeff', fontSize:'14pt'}}href="/">Sobre</a>
            </li>
            <li className={Styles.nav}>
                <a style={{color: '#f4eeff', fontSize:'14pt'}}href="/">Desenvolvedores</a>
            </li>
        </ul>
        <div onClick={handleClick} className={Styles.hamburguer}>
            {click ? (<AiOutlineClose className={Styles.icon} />) : (<AiOutlineMenu className={Styles.icon} />)}
        </div>
        <div className={Styles.settings}>
            <BsGear className={Styles.icon}/>
        </div>
    </div>
</div>
  );
}

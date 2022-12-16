import React from 'react';
import { Layout, Menu, Button, Card } from 'antd';
import { MainScreen } from '../MainScreen';
import { AiOutlineInfoCircle, AiOutlineFile, AiOutlineHome} from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import Styles from './Sidebar.module.css'
const { Header, Content, Footer, Sider } = Layout;

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
export default function Sidebar({
  children,
}){
  return(
    <Layout>
    <Sider style={{backgroundColor: 'white'}}>
      <div>
        <HiUserCircle className={Styles.icon} style={{fontSize:"80pt", marginTop:"35px"}}/>
        <h1 className={Styles.text} style={{fontSize:"1.5rem"}}>Érico Dias</h1>
        <h6 className={Styles.text} style={{fontSize:"1rem", paddingBottom:"30px"}}>Analista de Dados</h6>
      </div>
      <div className="logo" />

      <Button style={{marginLeft:"34px",
        marginTop:"10px",
        backgroundColor: "white",
        border: "none",
        color:'black',
        }} href='/'><AiOutlineHome style={{marginRight:'6px'}}/>Home</Button>
        <Button style={{marginLeft:"34px",
        marginTop:"10px",
        backgroundColor: "white",
        border: "none",
        color:'black',
        }} target='_blank' href='https://drive.google.com/file/d/1Yz1FraiSvvyy2icXPkn30ycW80wFPQdX/view?usp=share_link'><AiOutlineFile style={{marginRight:'6px'}}/>Documentação</Button>
        <Button style={{marginLeft:"34px",
        marginTop:"10px",
        backgroundColor:'none',
        border: "none",
        color:'black',
        }} href='/about'><AiOutlineInfoCircle style={{marginRight:'6px'}}/>Sobre</Button>
    </Sider>
    <Layout style={{backgroundColor: '#E8E8E8'}}>
      <Content
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            height: 'auto',
          }}
        >
          {children}
          
        </div>
      </Content>
    </Layout>
  </Layout>
  )
}
 

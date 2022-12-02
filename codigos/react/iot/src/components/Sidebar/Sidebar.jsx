import React from 'react';
import { Layout, Menu, Button } from 'antd';
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
const App = () => (
  <Layout>
    <Sider style={{backgroundColor: 'white'}}>
      <div>
        <HiUserCircle className={Styles.icon} style={{fontSize:"80pt", marginTop:"35px"}}/>
        <h1 className={Styles.text} style={{fontSize:"1.5rem"}}>Érico Dias</h1>
        <h6 className={Styles.text} style={{fontSize:"1rem", paddingBottom:"30px"}}>Analista de Dados</h6>
      </div>
      <div className="logo" />
      <Menu
        theme="light"
        mode="inline"
        
        defaultSelectedKeys={['1']}
        items={items}
      />
      <Button style={{marginLeft:"34px",
        marginTop:"10px",
        borderRadius: "20px",
        backgroundColor: "#2B3B15",
        border: "none",
        color:'white',
        }}>Configurações</Button>
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
            height: '100vh',
          }}
        >
          <MainScreen />
        </div>
      </Content>
    </Layout>
  </Layout>
);
export default App;
import React from 'react';
import { Layout } from 'antd';
import Menu from "./components/menu/Menu";
import CardCity from './components/cardCity/CardCity';
import './App.css';

const { Header, Content } = Layout;

const App: React.FC = () => (
    <Layout className='app-layout'>
        <Header style={{ height: 50, }}>
          <Menu />
        </Header>
        <Content className='content-layout'>
          <CardCity/>
        </Content>
    </Layout>
)

export default App;

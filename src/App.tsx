import React from 'react';
import { Layout } from 'antd';
import Menu from "./components/menu/Menu";
import './App.css';

const { Header, Content } = Layout;

const App: React.FC = () => (
    <Layout className='app-layout'>
        <Header style={{ height: 50, }}>
          <Menu />
        </Header>
        <Content>
          Content
        </Content>
    </Layout>
)

export default App;

import React from 'react';
import { RootState } from "./store/store";
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import Menu from "./components/menu/Menu";
import CardCity from './components/cardCity/CardCity';
import NotFound from './components/notFound/NotFound';
import './App.css';

const { Header, Content } = Layout;

const App: React.FC = () => {

  const city = useSelector((state: RootState) => state.city);

  return(
    <Layout className='app-layout'>
        <Header style={{ height: 50, background:"#92E3A9"}}>
          <Menu />
        </Header>
        <Content className='content-layout'>
          { city.cod === 404 ? <NotFound/> : <CardCity/> }
        </Content>
    </Layout>
  );
};

export default App;

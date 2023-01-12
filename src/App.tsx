import React, { useEffect } from 'react';
import { RootState } from "./store/store";
import { useSelector, useDispatch } from 'react-redux';
import { changeLoading } from './store/slices/loadingSlice';
import { Layout } from 'antd';
import Menu from "./components/menu/Menu";
import CardCity from './components/cardCity/CardCity';
import NotFound from './components/helloImg/HelloImg';
import Loading from './components/loading/Loading';
import './App.css';

const { Header, Content } = Layout;

const App: React.FC = () => {

  const city = useSelector((state: RootState) => state.city);
  const { isLoading } = useSelector((state: RootState) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeLoading(false));
    }, 1500)
  });

  return(
    <Layout className='app-layout'>
        <Header style={{ height: 50, background:"#008A61" }}>
          <Menu />
        </Header>
        <Content className='content-layout'>
          {isLoading ? <Loading /> : city.cod === 404 ? <NotFound /> : <CardCity /> }
        </Content>
    </Layout>
  );
};

export default App;

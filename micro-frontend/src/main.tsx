import React from "react";
// import Header from './components/header/header.component'
import { Button, Layout, Menu } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import SiderDemo from "./containers/index";
// import { showMessage } from "@nisum/utilmodule";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <div>
      <Layout>
        <Header>
          <div>App Header</div>
          {/* <Menu theme="dark" mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Angular</Menu.Item>
            <Menu.Item key="3">Vue</Menu.Item>
            <Menu.Item key="4">Example</Menu.Item>
          </Menu> */}
        </Header>
        <Layout>
          <Content>
            <Router>
              <div>
                <Link to="/angular">
                  <Button>Go to Angular</Button>
                </Link>
                <Link to="/vue">
                  <Button>Go to Vue</Button>
                </Link>
              </div>

            </Router>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

import React from "react";
// import Header from './components/header/header.component'
import { Button, Layout } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import SiderDemo from "./containers/index";
// import { showMessage } from "@nisum/utilmodule";

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <div>
      <Layout>
        <Header>App bar</Header>
        <div>
          <h2>hello world</h2>
        </div>
      </Layout>
    </div>
  );
}

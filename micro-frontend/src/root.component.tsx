import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import App from "./main";

export default function Root(props) {
  return <App {...props} />;
}

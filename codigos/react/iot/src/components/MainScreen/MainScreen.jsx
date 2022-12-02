import React from "react";
import Styles from "./MainScreen.module.css";
import { Col, Row, Space } from "antd";
import "antd/dist/antd.css";
import {
  WarningOutlined,
  AlertOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import CardMenu from "./CardMenu";

const houses = [
  {
    Title: "1",
  },
  {
    Title: "2",
  },
  {
    Title: "3",
  },
  {
    Title: "4",
  },
];

const status = [
  {
    Icon: (
      <CheckCircleOutlined
        style={{ color: "green", fontSize: "24pt", backgroundColor: "#fff", marginLeft:'100%' }}
      />
    ),
  },
  {
    Icon: (
      <AlertOutlined
        style={{ color: "yellow", fontSize: "24pt", backgroundColor: "#fff", marginLeft:'100%' }}
      />
    ),
  },
  {
    Icon: (
      <WarningOutlined
        style={{ color: "red", fontSize: "24pt", backgroundColor: "#fff", marginLeft:'100%' }}
      />
    ),
  },
];

export default function MainScreen() {
  return (
    <div className={Styles.menu}>
      <div className={Styles.container}>
        <div className={Styles.cardContainer}>
          <div className={Styles.card}>
            <CardMenu
              alert={status[0].Icon}
              heading="1"
              tempText="XX"
              humiText='YY'
            />
          </div>
          <div className={Styles.card}>
            <CardMenu
              alert={status[2].Icon}
              heading="2"
              tempText="XX"
              humiText='YY'
            />
          </div>
          <div className={Styles.card}>
            <CardMenu
              alert={status[1].Icon}
              heading="3"
              tempText="XX"
              humiText='YY'
            />
          </div>
          <div className={Styles.card}>
            <CardMenu
              alert={status[0].Icon}
              heading="4"
              tempText="XX"
              humiText='YY'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

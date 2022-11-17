import React from "react";
import Styles from "./Menu.module.css";
import { Col, Row, Space } from "antd";
import { GiGreenhouse } from "react-icons/gi";
import "antd/dist/antd.css";
import {
  WarningOutlined,
  AlertOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import CardMenu from "./CardMenu";

const houses = [
  {
    Title: "Casa de Vegetacao 1",
  },
  {
    Title: "Casa de Vegetacao 2",
  },
  {
    Title: "Casa de Vegetacao 3",
  },
  {
    Title: "Casa de Vegetacao 4",
  },
];

const status = [
  {
    Icon: (
      <CheckCircleOutlined
        style={{ color: "green", fontSize: "24pt", backgroundColor: "#fff" }}
      />
    ),
  },
  {
    Icon: (
      <AlertOutlined
        style={{ color: "yellow", fontSize: "24pt", backgroundColor: "#fff" }}
      />
    ),
  },
  {
    Icon: (
      <WarningOutlined
        style={{ color: "red", fontSize: "24pt", backgroundColor: "#fff" }}
      />
    ),
  },
];

export default function Menu() {
  return (
    <div className={Styles.menu}>
      <div className={Styles.container}>
        <div className={Styles.cardContainer}>
          <div className={Styles.card}>
            <CardMenu
              alert={status[0].Icon}
              icon={<GiGreenhouse className={Styles.icon} />}
              heading="Casa de Vegetacao 1"
              date='DD/MM/AAAA HH:MM'
              tempText="XX"
              humiText='YY'
            />
          </div>
          <div className={Styles.card}>
            <CardMenu
              alert={status[2].Icon}
              icon={<GiGreenhouse className={Styles.icon} />}
              heading="Casa de Vegetacao 2"
              date='DD/MM/AAAA HH:MM'
              tempText="XX"
              humiText='YY'
            />
          </div>
          <div className={Styles.card}>
            <CardMenu
              alert={status[1].Icon}
              icon={<GiGreenhouse className={Styles.icon} />}
              heading="Casa de Vegetacao 3"
              date='DD/MM/AAAA HH:MM'
              tempText="XX"
              humiText='YY'
            />
          </div>
          <div className={Styles.card}>
            <CardMenu
              alert={status[0].Icon}
              icon={<GiGreenhouse className={Styles.icon} />}
              heading="Casa de Vegetacao 4"
              date='DD/MM/AAAA HH:MM'
              tempText="XX"
              humiText='YY'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

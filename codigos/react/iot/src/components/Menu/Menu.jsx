import React from "react";
import Styles from "./Menu.module.css";
import { Col, Row, Space } from "antd";
import { GiGreenhouse } from "react-icons/gi";
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

export default function Menu() {
  return (
    <div className={Styles.menu}>
    <div className={Styles.container}>
    <div className={Styles.cardContainer}>
        <div className={Styles.card}>
            <CardMenu icon={<GiGreenhouse className={Styles.icon} />} heading='Casa de Vegetacao 1' text='Temperatura: XX, Umidade: YY' />
        </div>
        <div className={Styles.card}>
            <CardMenu icon={<GiGreenhouse className={Styles.icon} />} heading='Casa de Vegetacao 2' text='Temperatura: XX, Umidade: YY' />
        </div>
        <div className={Styles.card}>
            <CardMenu icon={<GiGreenhouse className={Styles.icon} />} heading='Casa de Vegetacao 3' text='Temperatura: XX, Umidade: YY' />
        </div>
        <div className={Styles.card}>
            <CardMenu icon={<GiGreenhouse className={Styles.icon} />} heading='Casa de Vegetacao 4' text='Temperatura: XX, Umidade: YY' />
        </div>
        </div>
    </div>
</div>
  );
}


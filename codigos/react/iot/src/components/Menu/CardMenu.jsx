import React, {Fragment} from 'react'
import Styles from './Menu.module.css'

export default function CardMenu({
  icon,
  heading,
  text,
}) {
  return (
    <Fragment>
    <div className={Styles.icon && Styles.container}>
        {icon}
    </div>
    <h3>{heading}</h3>
    <p>{text}</p>
    </Fragment>
  )
}
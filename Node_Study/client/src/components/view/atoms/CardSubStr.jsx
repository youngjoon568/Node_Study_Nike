import React from 'react'
import style from '../../css/CardSection.module.css';


export default function CardSubStr({ substr }) {
  return (
    <p className={style.sub_str}>{substr}</p>
  )
}

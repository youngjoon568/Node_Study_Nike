import React from 'react'
import style from '../../css/CardSection.module.css';

export default function CardHeadTitle({head}) {
  return (
    <h2 className={style.head_title}>{head}</h2>
  )
}

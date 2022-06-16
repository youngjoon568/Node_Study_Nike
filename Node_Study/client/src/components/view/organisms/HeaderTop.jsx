import React from 'react';
import style from "../../css/Header.module.css";
import HeaderTopLeft from '../molecules/HeaderTopLeft';
import HeaderTopRight from '../molecules/HeaderTopRight';

export default function HeaderTop() {
  return (
    <div className={style.header_top}>
      <div className={style.header_inner}>
        <HeaderTopLeft />
        <HeaderTopRight />
      </div>
    </div>
  )
}
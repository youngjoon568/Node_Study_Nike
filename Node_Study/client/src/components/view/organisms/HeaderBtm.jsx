import React from 'react';
import style from "../../css/Header.module.css";
import HeaderBtmLeft from '../molecules/HeaderBtmLeft';
import HeaderBtmMid from '../molecules/HeaderBtmMid';
import HeaderBtmRight from '../molecules/HeaderBtmRight';

export default function HeaderBtm() {
  return (
    <div className={style.header_btm}>
      <div className={style.header_inner}>
        <HeaderBtmLeft />
        <HeaderBtmMid />
        <HeaderBtmRight />
      </div>
    </div>
  )
}
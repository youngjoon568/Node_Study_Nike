import React from 'react';
import HeaderBtm from '../organisms/HeaderBtm';
import HeaderTop from '../organisms/HeaderTop';
import style from "../../css/Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <HeaderTop />
      <HeaderBtm />
    </header>
  )
}

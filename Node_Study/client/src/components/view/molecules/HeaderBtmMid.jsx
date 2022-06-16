import React from 'react';
import { Link } from 'react-router-dom';
import style from "../../css/Header.module.css";

export default function HeaderBtmMid() {
  return (
    <nav className={style.header_btmMid}>
      <ul className={style.btmMid_list}>
        <li><Link to="#">New Releases</Link></li>
        <li><Link to="#">Men</Link></li>
        <li><Link to="#">Women</Link></li>
        <li><Link to="#">Kids</Link></li>
        <li><Link to="#">Sale</Link></li>
      </ul>
    </nav>
  )
}
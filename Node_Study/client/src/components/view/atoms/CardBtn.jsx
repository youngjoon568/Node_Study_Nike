import React from 'react';
import style from '../../css/CardSection.module.css';

export default function CardBtn({ read, btn }) {
  return (
    <>
      <button>{btn == null ? "구매하기" : btn }</button>
      {read ? (
        <button className={style.read_btn}>자세히보기<span>&gt;</span></button>
      ) : ""}
    </>
  )
}

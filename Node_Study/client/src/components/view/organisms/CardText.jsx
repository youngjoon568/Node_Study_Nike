import React from 'react'
import style from '../../css/CardSection.module.css';
import CardBtn from '../atoms/CardBtn';
import CardDescription from '../atoms/CardDescription';
import CardSubStr from '../atoms/CardSubStr';
import CardTitle from '../atoms/CardTitle';

export default function CardText({ title, text1, text2, read, btn, substr }) {
    return (
        <div className={style.card_text}>
            {
                substr != null ? (<CardSubStr substr={substr} />) : ""
            }
            <CardTitle title={title} />
            <CardDescription text1={text1} text2={text2} />
            <CardBtn read={read} btn={btn} />
        </div>
    )
}

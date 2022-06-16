import React from 'react';
import style from '../../css/CardSection.module.css';
import CardContant from '../atoms/CardContant';
import CardHeadTitle from '../atoms/CardHeadTitle';
import CardText from '../organisms/CardText';

export default function CardSection({ cardArr }) {
  return (
    <>
      {
        cardArr.map(card => (
          <section className={style.card_section} key={card.cardID}>
            <div className="inner">
              {
                card.head != null ? (<CardHeadTitle head={card.head} />) : ""
              }
              <CardContant type={card.type} value={card.value} />
              <CardText title={card.title} text1={card.text1} text2={card.text2} read={card.read} btn={card.btn} substr={card.substr} />
            </div>
          </section>
        ))
      }
    </>
  )
}

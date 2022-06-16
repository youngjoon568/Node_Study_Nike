import React from 'react';

export default function CardContant({ type, value }) {
  return (
    <>
      {
        type === "IMAGE" ? (<img src={value} />) : (<video autoPlay muted loop src={value}/>)
      }
    </>
  )
}

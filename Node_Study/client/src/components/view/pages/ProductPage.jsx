import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';


export default function ProductPage() {
  const [shoes, setShoes] = useState({ price: 0 });
  const { productID } = useParams();

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:8000/nike/products/${productID}`,
    }).then(res => {
      setShoes(res.data);
    })
  }, []);


  return (
    <div>
      <h1>이건 제품 페이지에요.</h1>

      <div>
        <img
          src={shoes.img}
          alt={shoes.name + ' 예시 이미지'}
          style={{ height: 300 }}
        />
        <h3>{shoes.name}</h3>
        <h3>{shoes.price.toLocaleString()}원</h3>
        <p>{shoes.description}</p>
        <h5>제조지:{shoes.madein}</h5>
      </div>
    </div>
  )
}
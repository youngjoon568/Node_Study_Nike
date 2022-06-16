import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ProductListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: 'http://localhost:8000/nike/products',
        }).then(res => {
            this.setState({
                products: res.data
            });
        });
    }

    render() {
        const { products } = this.state;
        return (
            <>
                {
                    products.map((p, i) => (
                        <Link to={`/products/${i}`}>
                            <img src={p.img} alt={p.name} />
                            <h1>{p.name}</h1>
                            <p>{p.price}</p>
                            <p>{p.description}</p>
                            <p>{p.madein}</p>
                        </Link>
                    ))
                }
            </>
        )
    }
}

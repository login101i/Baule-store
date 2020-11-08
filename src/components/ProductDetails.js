import React, { Component } from 'react'

import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { Button } from "./Button"
import styled from 'styled-components'



export default class ProductDetails extends Component {
    render() {
        return (

            <ProductConsumer>
                {(value) => {
                    const { id, title, img, price, company, info, inCart } = value.detailProduct

                    return (
                        <div className="container">
                            <div className="row">
                                <div className="text-capitalize mx-auto col-10 text-center py-5 text-slanted">
                                    {title}
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-10 col-md-6 my-3">
                                    <img src={img} alt="" className="img-fluid" />
                                </div>


                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h2>{title}</h2>
                                    <h3>Cena: {price} zł</h3>
                                    <h4 className="text-muted font-weight-bold text-tile mt-3 lead"> {info}</h4>

                                    <div>
                                        <Link to='./cart'>
                                            {inCart ? (
                                                <Button disabled={inCart} onClick={() => value.addToCart(id)} >Produkt w koszyku </Button>) : (
                                                    <Button onClick={() => value.addToCart(id)} >Dodaj do koszyka </Button>)}
                                        </Link>
                                        <Link to='./'>
                                            <Button cart>Strona główna </Button>
                                        </Link>

                                    </div>
                                </div>

                            </div>

                        </div>
                    )


                }}
            </ProductConsumer>

            //             <ProductConsumer>
            //                 {(value) => {
            //                     const { id, company, img, info, price, title, inCart } = value.detailProduct;
            //                     return (
            //                         <div className="container py-5">
            //                             {/* title */}
            //                             <div className="row">
            //                                 <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            //                                     <h1>{title}</h1>
            //                                 </div>
            //                             </div>
            //                             {/* end of title */}
            //                             {/* product info */}
            //                             <div className="row">
            //                                 <div className="col-10 mx-auto col-md-6 my-3 ">
            //                                     <img src={img} alt="produkt" className="img-fluid" />
            //                                 </div>
            //                                 {/* Product text */}
            //                                 <div className="col-10 mx-auto col-md-6 my-3">
            //                                     <h2>Model: {title}</h2>
            //                                     <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Made by: {company}
            //                                     </h4>
            //                                     <strong>Cena:
            //                                         <span className="text-blue">{price} zł</span>
            //                                     </strong>


            //                                     <p className="text-capitalize font-weight-bold mt-3 lead text-muted">{info}</p>

            //                                     {/* Buttons */}
            //                                     <div>

            //                                         <Link to='/'>
            //                                             <Button>
            //                                                 Strona główna
            //                                             </Button>

            //                                         </Link>

            //                                         <Button
            //                                             disabled={inCart ? true : false}
            //                                             onClick={() => { 
            //                                                 value.addToCart(id)
            //                                                 value.openModal(id)
            //  }}
            //                                            cart
            //                                         >


            //                                             {inCart ? 'W koszyku' : "Dodaj do koszyka"}
            //                                         </Button>
            //                                     </div>
            //                                 </div>


            //                             </div>
            //                         </div>
            //                     )
            //                 }}
            //             </ProductConsumer>
        )
    }
}

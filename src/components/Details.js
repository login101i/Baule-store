import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-tlue my-5">

                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end of title */}
                            {/* Product info */}
                            <div className="row">
                                <div classame="col-10 mx-auto col-md-6 ny-3">
                                    <img src={img} className="img-fluid" alt="product"></img>

                                </div>
                                {/* product text */}
                                <div classame="col-10 mx-auto col-md-6 ny-3 text-capitalize">
                                    <h3>model: {title}</h3>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Mady by: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$ {price} </span>
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bol mt-3 mb-0">
                                        Some info about the product:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                Back to products
                                             </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? 'inCart' : "add to cart"}
                                        </ButtonContainer>
                                    </div>

                                </div>

                            </div>
                            {/* End of Product info */}


                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

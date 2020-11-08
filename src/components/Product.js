import React, { Component } from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {

        const { id, title, img, price, inCart } = this.props.product

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                <ProductConsumer>
                    {(value) => (
                        <div className="card">
                            <div className="img-container p-5 relative"
                                onClick={() => value.handleDetail(id) }
                            >
                                <Link to='/productdetails'>
                                    <img src={img} alt="phone" className="card-img-top scale" />
                                </Link>
                                <Button className="cart-btn"
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                       
                                        value.openModal(id)
                                    }}

                                >
                                    {inCart ? (<p class="text-capitalize mb-0">w koszyku</p>) : (<p className="text- mb-0">dodaj do koszyka</p>
                                    )}
                                </Button>
                            </div>
                            {/* card footer */}

                            <div className="card-footer mx- d-flex justify-content-center">
                                <p className="align-self-center mb-0">{title}</p>
                                <span className="ml-auto text-blue">{price} zł</span>
                            </div>

                        </div>
                    )}


                </ProductConsumer>


            </ProductWrapper >
        )
    }
}

const ProductWrapper = styled.div`
background-color:var(--mainWhite);
overflow:hidden;
cursor:none;

.card-footer{
    background:transparent;
    // border-top:transparent;
    transition: all 0.4s ease-in-out;
}
.scale{
    transition:all 0.3s linear;
}

&:hover .scale{
       transform:scale(1.02)
}
&:hover .cart-btn{
    transform:translate(0px)
 
}

.relative{
    position:relative
}

`

const Button = styled.button`
background-color:var(--mainRed);
width:100px;
position:absolute;
bottom:0;
right:0;
transform:translateX(120px);
transition:all 0.3s ease-in-out;
border-radius:1.5rem 0 0 0;
border:none;
padding:5px 10px;
cursor:pointer;
color:var(--mainWhite);
font-weight:600;

`

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

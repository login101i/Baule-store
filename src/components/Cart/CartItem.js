import React from 'react'

import EmptyCart from './EmptyCart'

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item
    const { increment, decrement, removeItem } = value


    return (

        <div className="container-fluid text-center my-3" >
            <div className="row">

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">
                        <img src={img}
                            style={{ width: '12rem' }}
                            className="img-fluid"
                            alt="" />
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Product: </span> {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Cena: </span> {price} zł
                </div>
                <div className="col-10 mx-auto my-2 col-lg-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>

                            <span className="btn btn-black mx-1"
                                onClick={() => decrement(id)}>
                                -
                              </span>
                            <span className="btn btn-black mx-1">
                                {count}
                            </span>
                            <span className="btn btn-black mx-1"
                                onClick={() => increment(id)}>
                                +
                              </span>
                        </div>

                    </div>

                </div>
                <div className="col-10 mx-auto  col-lg-2">
                    <div
                        className="cart-icon text-center"
                        onClick={() => removeItem(id)}>
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
                <div className="col-10 mx-auto my-2 col-lg-2 my-lg-0">
                    <span className="d-lg-none">Razem: </span> {total} zł
                </div>

            </div>
        </div >
    )
}







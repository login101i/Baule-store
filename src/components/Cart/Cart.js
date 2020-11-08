import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from '../Cart/CartColumns'
import EmptyCart from '../Cart/EmptyCart'
import { ProductConsumer } from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'


export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { cart } = value
                    if (cart.length > 0) {
                        return (
                            <>
                                <section className="col-10 mx-auto text-uppercase">
                                    <Title title="Twój" name="koszyk" />
                                </section>
                                <CartColumns />
                                <CartList value={value}/>
                                <CartTotals value={value} 
                                history={this.props.history}
                                />
                            </>
                        )
                    } else {
                        return (
                            <EmptyCart />
                        )
                    }
                }}
            </ProductConsumer >

        )
    }
}

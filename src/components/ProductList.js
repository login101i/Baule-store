import React, { Component } from 'react'


import styled from 'styled-components'
import Title from './Title'
import { storeProducts } from '../data'
import { ProductConsumer } from '../context'
import Product from './Product'

export default class ProductList extends Component {
    state = {
        products: []
    }
    render() {
        // console.log(storeProducts)
        return (
            <React.Fragment>
                <div className="py-5 col-12">
                    <div className="container">
                        <Title title="our" name="products" />
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                   return value.products.map((item) => (
                                        <Product key={item.id} title={item.title} product={item} 
                                       
                                        />
                                    ))
                                }


                                }
                            </ProductConsumer>
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )
    }
}


const ProductListContainer = styled.div`

`

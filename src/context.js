import React, { Component } from 'react'

import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext()



class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct,
    }
    componentDidMount() {
        this.setProducts()
    }

    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach((item) => {
            const singleItem = { ...item }
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }

    handleDetail = () => {
        console.log("handleDetail");
    }
    addToCart = () => {
        console.log("add to Cart")
    }


    render() {

        return (
            <React.Fragment>
                <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart
                }}>
                    {this.props.children}
                </ProductContext.Provider>

            </React.Fragment >
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductConsumer, ProductProvider }

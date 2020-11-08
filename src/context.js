import React, { Component } from 'react'

import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext()



class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct,
        modalProduct: detailProduct,
        modalOpen: false,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,

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


    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product


        // const product = this.state.products.find(item => item.id === id)
        // return product;
    }

    handleDetail = id => {
        const product = this.state.products.find(item => item.id === id)
        this.setState(() => {
            return {
                detailProduct: product
            }
        })
    }
    // const product = this.getItem(id)
    // this.setState(() => {
    //     return { detailProduct: product }
    // })

    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const product = tempProducts.find(item => item.id === id)
        product.inCart = true;
        product.count = 1;
        product.total = product.price;

        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]

            }

        }, () => this.setTotal())

    }

    increment = (id) => {
        const tempCart = [...this.state.cart]
        const product = tempCart.find(item => item.id === id)
        const count = product.count
        product.count = count + 1
        const total = product.total
        const price = product.price
        product.total = total + price
        this.setState(() => {
            return {
                cart: tempCart
            }
        }, () => this.setTotal())
    }

    decrement = (id) => {
        const tempCart = [...this.state.cart]
        const product = tempCart.find(item => item.id === id)
        const count = product.count
        product.count = count - 1
        const total = product.total
        const price = product.price
        if (product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = total - price

            this.setState(() => {
                return {
                    cart: tempCart
                }
            }, () => this.setTotal())
        }

    }

    setTotal = () => {
        let subtotal = 0
        this.state.cart.map(item => (subtotal += item.total))
        let tax = parseFloat((subtotal * 0.19).toFixed(2))
        let total = (subtotal + tax).toFixed(2)

        this.setState(() => {
            return {
                cartSubTotal: subtotal,
                cartTax: tax,
                cartTotal: total,
            }
        })


    }

    removeItem = (id) => {
        const tempCart = [...this.state.cart]
        const product = tempCart.find(item => item.id === id)
        product.inCart = false
        //   product.total=0
        //   product.count=0

        const newCart = tempCart.filter(item => item.id !== id)
        this.setState(() => {
            return {
                cart: newCart
            }
        }, () => {
            this.setTotal()
            //   this.checkItem(id)
        })
    }

    // checkItem=(id)=>{
    //    const tempProducts=[...this.state.products]
    //    const productIndex=tempProducts.indexOf(tempProducts.find(item=>item.id===id))
    //    const propertiesOfProduct=tempProducts[productIndex]
    //     console.log(propertiesOfProduct)
    // }

    clearCart = () => {
        console.log(this.state.cart)
        this.setState(() => {
            return {
                cart: [],

            }
        }, () => {
            return (
                this.setProducts(),
                this.setTotal()
            )

        })
    }










    // let tempProducts=[...this.state.products]
    // const product=tempProducts.find(item=>item.id===id)
    // product.inCart=true
    // product.count=1
    // const price=product.price
    // product.total=price
    // this.setState(()=>{
    //     return {
    //         products:tempProducts,
    //         cart:[...this.state.cart, product]
    //     }
    // },()=>(console.log(this.state)))
    // console.log(product)




    openModal = (id) => {
        const product = this.state.products.find(item => item.id === id)
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true,
            }
        })
    }
    // const product = this.getItem(id);
    // this.setState(()=>{
    //     return {
    //         modalProduct:product,
    //         modalOpen:true
    //     }
    // })

    closeModal = () => {

        this.setState(() => {
            return { modalOpen: false }
        })
        // this.setState(()=>{
        //     return {modalOpen:false}
        // })
    }


    render() {

        return (
            <React.Fragment>
                <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    setTotal: this.setTotal
                }}>
                    {this.props.children}
                </ProductContext.Provider>

            </React.Fragment >
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductConsumer, ProductProvider }

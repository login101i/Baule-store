import React, { Component } from 'react'
import styled from 'styled-components';
import { Button } from './Button';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom'


export default class Modal extends Component {
    render() {
        return (
            <>
                <ProductConsumer>

                    {(value) => {
                        const { id, img, title, price } = value.detailProduct
                        const { modalOpen, closeModal } = value

                        if (!modalOpen) {
                            return null
                        } else {
                            return (
                                <ModalContainer>
                                    <div className="row">
                                        <div id="modal" className="col-8 col-md-6 col-lg-4  mx-auto p-5 text-center">
                                            <h2>{title}</h2>
                                            <h3>{price} zł</h3>
                                            <img src={img} alt="" className="img-fluid py-3" />

                                            <Link to="/">
                                                <Button
                                                    onClick={() => {
                                                        value.addToCart(id)
                                                        closeModal()
                                                    }}
                                                >
                                                    Koszyk
                                                </Button>
                                            </Link>
                                            <Link to="/">
                                                <Button
                                                    onClick={() => closeModal()}>
                                                    Home
                                                </Button>
                                            </Link>

                                        </div>
                                    </div>
                                </ModalContainer>
                            )
                        }
                    }}

                </ProductConsumer>

            </>
        )
    }

}


// <ProductConsumer>
//     {(value) => {
//         const { modalOpen, closeModal } = value
//         const { id, img, title, price, inCart } = value.modalProduct

//         if (!modalOpen) {
//             return;
//         }
//         else {
//             return (
//                 <ModalContainer>
//                     <div className="container"

//                     >
//                         <div className="row">
//                             <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
//                             >
//                                 <h5>Dodano do koszyka</h5>
//                                 <img src={img} alt="" className="img-fluid" />
//                                 <h5>{title}</h5>
//                                 <h5 className="text-muted">cena to : {price}</h5>
//                                 <Link>
//                                     <Link to="/cart">

//                                         <Button className="cart-btn"

//                                             onClick={() => {
//                                                 value.addToCart(id)
//                                                 value.closeModal()
//                                             }}
//                                         >
//                                             Idz do koszyka
//                                     </Button>
//                                     </Link>
//                                     <Link to="/">
//                                         <Button onClick={() => value.closeModal()}>
//                                             <p className="text- mb-0">Kontynuuj zakupy</p>
//                                         </Button>

//                                     </Link>
//                                 </Link>

//                             </div>
//                         </div>
//                     </div>

//                 </ModalContainer>

//             )
//         }

//     }}
// </ProductConsumer>


const ModalContainer = styled.div`

background-color:rgba(0,0,0,0.2);
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
 
}

`


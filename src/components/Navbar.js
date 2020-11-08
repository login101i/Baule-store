import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import logo from '../iconFinder.svg'
import logo2 from '../logo.svg'
import { Button } from './Button'

export default function Navbar() {
    return (
        <NavbarWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-info">
            {/*  https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk*/}
            <Link to='/'></Link>

            <Link to="/">
                <img src={logo2} alt="" className="texto" />
            </Link>
            <ul className="navbar-nav align-items-center py-1 my-2">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link h4">
                        produkty
                    </Link>

                </li>
            </ul>



            <Link to="/cart" className='ml-auto'>
                <Button
                    style={{ color: 'rgb(233, 227, 227)', borderColor: 'rgb(233, 227, 227)' }}>
                    <i className="fas fa-cart-plus">
                    </i>
                    <span className=" ml-4">Koszyk</span>
                </Button>

            </Link>



        </NavbarWrapper>


    )
}

const NavbarWrapper = styled.div`
background-color:var(--mainDark) !important;
justify-content:center;
align-items:center;

.nav-link{
    color:var(--mainWhite) !important;
    text-transform:capitalize;
    transition:all 0.3s ease-in-out;
    font-weight:600;
&:hover{
    transform:scale(1);

}
}

`




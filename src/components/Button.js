import styled from 'styled-components'


export const Button = styled.button`
text-transform:capitalize;
background:transparent;
color:${props => props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
border:0.2rem solid;
padding:3px 10px;
font-size:1.5rem;
border-radius:0.5rem;
transition:all 0.3s ease-in-out;
margin:6px;
font-weight:600;
border-color: ${props=>props.cart ? "var(--mainGreen)": "var(--mainBlue)"};


&:hover{
    color:var(--mainWhite);
    background-color:${props => props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
}
&:focus{
    outline:none;
}
`
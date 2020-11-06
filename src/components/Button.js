import styled from 'styled-components'


export  const Button = styled.button`
text-transform:capitalize;
background:transparent;
color:var(--mainWhite);
border:0.1rem solid var(--mainWhite);
padding:3px 10px;
font-size:1.5rem;
border-radius:0.5rem;
transition:all 0.3s ease-in-out;

&:hover{
    color:var(-mainDark);
    background-color:var(--mainDark);
}
&:focus{
    outline:none;
}
`
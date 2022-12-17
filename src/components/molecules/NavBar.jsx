import React from 'react'
import styled from 'styled-components'


const NavBarStyle = styled.div`
    background-color:  #292929;
    display: flex;
    align-items: center;
    padding: 2.5% 5%;
    a{
        text-decoration: none;
        color: #fff;
        padding: .3rem .5rem;
        border: 1px solid #fff;
        font-size: 2.6rem;
    
    }
    @media (max-width: 768px) {
       justify-content: center;
      }
`
const NavBar = () => {
  return (
    <NavBarStyle>
        <a href="#banner">MyTestApp</a>

    </NavBarStyle>
  )
}

export default NavBar
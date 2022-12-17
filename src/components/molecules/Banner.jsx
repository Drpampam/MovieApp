import React from 'react'
import styled from 'styled-components'
import BannerPic from '../../asset/images/banner.png'

const BannerStyled = styled.div`
    width: 100%;
    background: url(${BannerPic});
    background-size: cover;
    background-repeat: no-repeat;
    // height: 40vh;
    width: 100vw;
    padding: 5% 5% 8%;
    h1{
        font-size: 4rem;
        color: #fff;
        width: 30%;
        font-weight: 500;
        @media (max-width: 768px) {
     
            font-size: 2rem;
            margin: auto;
            width: 60%;
         
          }
    }
   
`

const Banner = () => {
  return (
    <BannerStyled id="banner">
        <h1>Watch something incredible.</h1>
    </BannerStyled>
  )
}

export default Banner
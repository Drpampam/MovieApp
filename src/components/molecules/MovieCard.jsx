import React from 'react'
import styled from 'styled-components'
import MyText from '../atoms/MyText'

const MovieCardStyle = styled.div`
    background-color: #000;
    color: #fff;
    width: 24%;
    margin: 1rem 0;
    @media (max-width: 768px) {
     
        width: 33%;
      }
    img{
        width:100%;
    }
    text-align: center;
    position: relative;
`

const MovieCard = ({imgPath="https://wallpapercave.com/wp/wp10822565.jpg", movieName="Film wey make sense"}) => {
  return (
    <MovieCardStyle>
        <img src={imgPath} alt={`${movieName} poster.`}/>
        <MyText movie>{movieName}</MyText >
    </MovieCardStyle>
  )
}




export default MovieCard
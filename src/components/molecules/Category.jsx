/* eslint-disable no-undef */
import React from 'react'
import styled from 'styled-components'
import MyText from '../atoms/MyText'
import MovieCard from './MovieCard'

const data = [
    {
        category: "Action",
        list: ["Target", "Wonder Woman", "Flash","Target", "Wonder Woman", "Flash","Target", "Wonder Woman", "Flash"],
    }
]

const CategoryStyle = styled.div`
width: 100%;
    .category-list{
        display: flex;
        // overflow-wrap: normal;
        // overflow-x: scroll;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }
`

const Category = ({categoryName, categoryList}) => {
  return (
    <CategoryStyle>
        <MyText>{categoryName}</MyText>
        <div className="category-list">
            {data[0].list.map((category, index)=>{
                return (<MovieCard key={index} movieName={category}/>)
            })}
        </div>
    </CategoryStyle>
  )
}

export default Category
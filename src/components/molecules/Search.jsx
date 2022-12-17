import React from 'react'
import styled from 'styled-components'
import MyText from '../atoms/MyText'


const SearchStyle = styled.div`
    width: 100%;
    input{
        width: 100%;
        margin:-1rem 0 3rem;
        border: 1px solid #000;
        padding: .5rem 1rem;
    }
`

const Search = ({category, setCategory}) => {

const handleChange = (e) =>{
    setCategory(e.target.value)
}

  return (
    <SearchStyle>
        <MyText primary>Search</MyText>
        <input type="text" value={category} onChange={handleChange} />
    </SearchStyle>
  )
}

export default Search
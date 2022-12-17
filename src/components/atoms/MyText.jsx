import styled from "styled-components";

const Title = styled.p`
font-size: ${props => props.primary !== null ? "1.5rem" : "1.5em"};
  text-align: ${props => props.primary !== null ? "left" : "center"};
  margin: ${props => props.primary !== null ? "0" : "initial"};
  position: ${props => props.movie !== null ? "absolute" : "relative"};
  color: ${props => props.primary !== null ? "#000" : "#fff"};
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
`;


const MyText = ({children, movie=null, primary=null})=>{
    return(
        <Title movie={movie} primary={primary}>
            {children}
        </Title>
    )
};




export default MyText;
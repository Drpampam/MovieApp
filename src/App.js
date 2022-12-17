import Category from './components/molecules/Category';
import Search from './components/molecules/Search';
import styled from 'styled-components';
import Banner from './components/molecules/Banner';
import NavBar from './components/molecules/NavBar';
import axios from 'axios';
import { useState,useCallback} from 'react';

const AppStyle = styled.div`
  
  .bottom{
    padding: 5%;
  }
`


function App() {
  const [category, setCategory] = useState("action");
const [movies,setMovies] = useState([])


const getMovie = useCallback(async() => {
  try{
        const result = await axios( {
          method: 'get',
          url: `https://www.omdbapi.com/?i=tt3896198&type=${category}&apikey=eac01d93&page=2`,
          headers: { 
            'Content-Type': 'application/json'
          },
        });
    
        const {data} = result;
        console.log(data)
    setMovies([...movies,data])
      } catch(error){
            console.log(error)
          }
  },
  [movies,category],
)
getMovie()
// useEffect(() => {
// getMovie();

// }, [getMovie])

console.log(movies);
  return (
    <AppStyle>
    <NavBar />
    <Banner />  
    <div className='bottom'>
      <Search setCategory={setCategory} category={category}/>
      <Category />
    </div>


    </AppStyle>
  );
}

export default App;

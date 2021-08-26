import React ,{useState ,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movie from './Movie';
import Navbar from './Navbar';
import Other from './Other';
import Footer from './Footer';
const App= ()=> {
const [movies,setMovie]=useState([]);
const [search,setSearch]=useState("spider");

const change = (e)=>{
  setSearch(e.target.value);
}
 

const getMovierequested = async()=>{
  const url=`https://www.omdbapi.com/?s=${search}&apikey=6939b3d9`;
  const response=await fetch(url);
  const responsejson=await response.json();
  console.log(responsejson);
  setMovie(responsejson.Search)

}

useEffect(()=>{
  getMovierequested();

},[search])

return (
   <>
   <Navbar change={change}/>
<h1 className="text-center text-decoration-underline text-uppercase m-3" style={{fontFamily:"sans-serif" , color:"white"}}>the movie</h1>

{
  !movies?(
   
  <p>no data</p>
   
  )
    :(
      

  <>

<Movie movie={movies} />

<Other o="Doraemon" />
<Other o="Dragon Ball" />
<Other o="Mr Bean" />

<Other o="Avatar" />
<Other o="Iron man" />
<Other o="Superman" />
<Other o="batman" />
<Other o="Avengers" />




</>
    )
 
}
<Footer />

   </>
  );
}

export default App;


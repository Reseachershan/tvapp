import React ,{useState ,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movie from './Movie';

const Other= (props)=> {
const [movies,setMovie]=useState([]);
const [search,setSearch]=useState("");


 

const getMovierequested = async()=>{
  const url=`https://www.omdbapi.com/?s=${props.o}&apikey=6939b3d9`;
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
 
      

  <h1 className="m-3">{props.o}</h1>
  <Movie movie={movies} />


 


   </>
  );
}

export default Other;
import React from 'react';

const Movie = (props) => {
    return (
        <>
        
        <div className="container-fluid   d-flex flex-nowrap   overflow-auto ">
        {props.movie.map((movie,ind)=>{
            return(
        
             <>       
          {/* <img  className="img-fluid d-flex flex-column m-1" src={movie.Poster} alt="movie image" /> */}
          <div className="card col-12 m-1" style={{width:"18rem",backgroundColor:"black"}} >
  <img src={movie.Poster} className="img-fluid img"  style={{backgroundColor:"wheat",maxWidth:"500px" ,height:"350px" }}     alt="..." />
  <div className="card-body" style={{fontFamily:"cursive" , color:"white" }}>
    <h5 className="card-text"> Movie Name :{movie.Title}</h5>
    <h5 className="card-text">Release Date :{movie.Year}</h5>
    
  </div>
</div>


          </>

          )
        })

        }
        </div>
        </>
    )
}

export default Movie;
import React from 'react';
import { Link } from 'react-router-dom';
// import Cards from "..Cards/"
import Cards from '../Cards';
function Movie() {
  return(
  <>
    <Link to="/Cards">
    <Cards />
    </Link>
    
    
  </>
  )
}
export default Movie;
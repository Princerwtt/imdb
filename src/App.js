import React from 'react';
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import MovieList from './components/MovieList'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Navigation/>
       <Routes>
             <Route path='/' element={<Home/>}/>     
             <Route path='/movie/:id' element={<MovieList/>}/>
             <Route path='/*' element={<h1>This is error Page</h1>}/>
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
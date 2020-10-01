import React, { useState } from 'react';
import './App.css';
import Movielist from './Components/Movielist';
import Nav from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import Title from './Components/Title';

const App = (props) => {
  const [Movies,setMovies] = useState(
    [{title:"Papillon", description:"Papillon Movie", rating:3 , source:"https://upload.wikimedia.org/wikipedia/en/4/4e/Papillon_2018_poster.png"},
    {title:"Star Wars", description:"Star wars Movie", rating:4 , source:"https://media.lesechos.com/api/v1/images/view/5df9b9a5d286c254fc20d894/1280x720/0602422245162-web-tete.jpg"}])

    const Addmovie = (x) => {
      setMovies([...Movies,{title:x.title,description:x.description,source:x.source}])
    }
  
  return ( <div>
    <Nav/>
    <Title/>
    <Searchbar/>
    <Movielist Movies={Movies} Addmovie={Addmovie}/>
    
  </div> );
}
 
export default App;
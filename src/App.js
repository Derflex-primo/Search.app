import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCart from "./MovieCart";
import SearchIcon from "./search.svg"

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7093b65d"

 
const movie1 = {
    
        "Title": "Hulk",
        "Year": "2003",
        "imdbID": "tt0286716",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg"
    
}
 

export default function App() {

    const [movies, setMovies] =  useState([]);
    const [searchTerm, setSearchTerm] = useState("");
   
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }


    useEffect(() => {{
     searchMovies("dog")

    }},[])
    return (
        <div className="app">
           <h1>YourMovies</h1>
           <div className="search">
            <input placeholder="Look for it here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}></input>
            <img src={SearchIcon} alt="search"
            onClick={() => searchMovies(searchTerm)}></img>
           </div>

           {movies?.length > 0
            ? (
            <div className="container">
                {movies.map((movie) => 
                (<MovieCart movie={movie} />))}  
            </div>): 
             (
            <div className="empty"> 
            <h1>No movies Found!</h1>
            </div>
            )}
          

        </div>
    );
}
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Reviewform from "./Reviewform";

const Home = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("https://api.rawg.io/api/games")
        .then(response=> response.json())
        .then(data => setGames(data.results));
    }, []);


    return (
        <div>
            <h1>Game Library</h1>
            <ul>
                {games.map(game => {
                    <li key={game.id}>
                    <Link to={game.id}>
                        <h2>{game.name}</h2>
                        <img src={game.background_image} alt={game.name} />
                    </Link>
                    <Reviewform gameId={game.id} /> 
                    </li>
                    //STILL HAVE TO IMPLEMENT THE BACKEND LOGIC DONT FORGET HABANA THATS WHY ITS NOT WORKING YET
                })}
            </ul>
        </div>
    )
}

export default Home
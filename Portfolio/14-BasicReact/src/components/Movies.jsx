import React, {useState} from "react";
import Card from "./Card";
import sw from "../data.js"

function Movies() {
    
    const [episodeSelected, setEpisodeSelected] = useState(1);

    function nextEpisode() {
        setEpisodeSelected(episodeSelected+1);
    }

    function previousEpisode() {
        setEpisodeSelected(episodeSelected-1);
    }

    var movie; 
    sw.forEach(movieFound => {
        if (parseInt(movieFound.episode) === episodeSelected) movie = movieFound;
    });
    
    return(
        <div id="Movies">
            <button className="previous" onClick={previousEpisode} disabled={episodeSelected===1}> Previous </button>
            <Card movie={movie} color="white"/> 
            <button className="next" onClick={nextEpisode} disabled={episodeSelected===6}> Next </button>
        </div>
    );
}

export default Movies;
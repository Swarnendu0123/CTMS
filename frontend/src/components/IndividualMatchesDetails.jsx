import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Players from "./Players";
import { useRecoilState, useRecoilValue } from "recoil";
import { matchData } from "../store/MatchDetails.atom";

const IndividualMatchesDetails = () => {
    const { id } = useParams();
    const [match, setMatch] = useState(null);
    const [matches, setMatches] = useRecoilState(matchData);

    console.log(id);
    console.log(matches);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8000/matches");
            const data = await response.json();
            setMatches(data);
            const match = data.find((match) => match._id === (id));
            setMatch(match);
        }
        fetchData();
    }, []);

    
    return (
        <div>
            {match ? (
                <div className="container">
                    <h1>
                        {match.team1Platers.reduce((acc, player) => acc + player.score, 0) >
                        match.team2Platers.reduce((acc, player) => acc + player.score, 0)
                        ? `${match.team1} won by ${match.team1Platers.reduce((acc, player) => acc + player.score, 0) - match.team2Platers.reduce((acc, player) => acc + player.score, 0)} runs`
                        : `${match.team2} won by ${match.team2Platers.reduce((acc, player) => acc + player.score, 0) - match.team1Platers.reduce((acc, player) => acc + player.score, 0)} runs`
                        }
                    </h1>
                    <h1>{match.team1} vs {match.team2}</h1>
                    <p>Date: {match.date}</p>
                    <p>Time: {match.time}</p>
                    <p>Venue: {match.venue}</p>
                    <h2>Total Score by team1: {
                        match.team1Platers.reduce((acc, player) => acc + player.score, 0)
                        }/
                       { match.team2Platers.reduce((acc, player) => acc + player.wickets, 0)}
                        </h2>
                    <h2>Total Score by team2: {
                        match.team2Platers.reduce((acc, player) => acc + player.score, 0)
                        }/
                        { match.team1Platers.reduce((acc, player) => acc + player.wickets, 0)}
                        </h2>

                    <div className="flex">
                    <Players playersArray={match.team1Platers} teamName={match.team1}/>
                    <Players playersArray={match.team2Platers} teamName={match.team2}/>
                    </div>
                    
                </div>
            ) : (
                <h1>Match not found</h1>
            )}
        </div>
    );
    }

    export default IndividualMatchesDetails;
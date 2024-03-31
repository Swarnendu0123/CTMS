import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { matchData } from "../store/MatchDetails.atom";


const MatchesDetails = () => {
    const [matches, setMatches] = useRecoilState(matchData);

    useEffect(() => {
        fetch("http://localhost:8000/matches")
            .then((res) => res.json())
            .then((data) => setMatches(data));
    }, []);

    return (
        <div className="container">
            <table className="table border m-3">
                <thead className="">
                    <tr className="">
                        <th className="p-3">Team</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Venue</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((match) => (
                        <tr key={match.id} className="border">
                            <td className="p-5">{match.team1} vs {match.team2}</td>
                            <td className="p-5">{match.date}</td>
                            <td className="p-5">{match.time}</td>
                            <td className="p-5">{match.venue}</td>
                            <td className="p-5">
                                <button className="btn btn-primary">
                                    <Link to={"/matches/"+match._id}>
                                    View Details
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MatchesDetails;
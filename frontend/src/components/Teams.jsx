import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { numberOfTeamsState } from "../store/NumberOfTeam";
import IndividualTeam from "./IndividualTeam";


const Teams = () => {
const [teams, setTeams] = useState([]);
const [numberOfTeams, setNumberOfTeams] = useRecoilState(numberOfTeamsState);
const [selectedTeam, setSelectedTeam] = useState(teams[0]);

// fetch the teams from the backend and randomly sleect numberOfTeams number of teams
    useEffect(() => {
        fetch("http://localhost:8000/teams")
            .then((res) => res.json())
            .then((data) => {
                const randomTeams = data.sort(() => Math.random() - Math.random()).slice(0, numberOfTeams);
                console.log(randomTeams);
                setTeams(randomTeams);
            });
    }, []);


//    sort the teams by points
    teams.sort((a, b) => b.points - a.points);


    return (
        <div className="container flex">
            <table className="table border m-3">
                <thead>
                    <tr>
                        <th className="p-5">Team Name</th>
                        <th className="pl-20 pr-20"> Details</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.id} className="border">
                            <td className="p-5">{team.teamName}</td>
                            <td className="p-5">
                                <button className="btn btn-primary" onClick={()=>{
                                    setSelectedTeam(team);
                                }}>
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <IndividualTeam team={selectedTeam} />
        </div>
    );
}


export default Teams;
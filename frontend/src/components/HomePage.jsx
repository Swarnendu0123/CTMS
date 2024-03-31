import { teams } from "../assets/teamdata";

const HomePage = () => {
//    sort the teams by points
    teams.sort((a, b) => b.points - a.points);


    return (
        <div className="container">
            <table className="table border m-3">
                <thead>
                    <tr>
                        <th className="p-5">Team Name</th>
                        <th className="p-5">Matches Played</th>
                        <th className="p-5">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.id} className="border">
                            <td className="p-5">{team.teamName}</td>
                            <td className="p-5">{team.MP}</td>
                            <td className="p-5">{team.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default HomePage;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import IndividualMatchesDetails from './components/IndividualMatchesDetails.jsx';
import { RecoilRoot } from 'recoil';
import NewTeam from './components/NewTeam.jsx';
import MatchesDetails from './components/MatchDetails.jsx';
import Login from './components/Login.jsx';
import GenerateTeam from './components/GenerateTeam.jsx';
import GeneratedTeam from './components/GeneratedTeam.jsx';
import Teams from './components/Teams.jsx';
import SignUp from './components/SignUp.jsx';
import Navbar from './components/Navbar.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navbar />}>
            <Route path="matches" element={<MatchesDetails />} />
            <Route path="matches/:id" element={<IndividualMatchesDetails />} />
            <Route path="dashboard" element={<App />} />
            <Route path="team/new" element={<NewTeam />} />
            <Route path="generate" element={<GenerateTeam />} />
            <Route path="generated/team" element={<Teams />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
)

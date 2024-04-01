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


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/matches" element={<MatchesDetails />} />
          <Route path="/matches/:id" element={<IndividualMatchesDetails />} />
          <Route path="/team/new" element={<NewTeam />} />
          <Route path="/login" element={<Login />} />
          <Route path="/generate" element={<GenerateTeam />} />
          <Route path="/generated/team" element={<Teams/>}/>
        </Routes>
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
)

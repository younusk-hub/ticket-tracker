import './App.scss';
import team from './data/team';
import Cards from './components/Cards/Cards';
import AddCard from './components/AddCard/AddCard';
import React, {useState, useEffect} from "react";
import TotalTickets from './components/TotalTickets/TotalTickets.jsx';

function App() {
  const addCounter = () => {
    return team.forEach(member => member.counter = 0)
  }
  addCounter()
  
  const [teamArr, setTeamArr] = useState(team);

  console.log(teamArr);
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target);
    setTeamArr(team.push({
      id: team.length + 1,
      name: event.target.userName.value,
      role: event.target.userRole.value
    }))
    event.target.userName.value = "";
    event.target.userRole.value = "";
    console.log(team);
  }

  return (
    <div className="app">
      <h1>Ticket Tracker</h1>
      {/* <TotalTickets team = {team}/> */}
      <AddCard handleSubmit={handleSubmit}/>
      <Cards team = {team}/>
    </div>
  );
};

export default App;
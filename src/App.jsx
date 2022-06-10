import './App.scss';
import team from './data/team';
import Cards from './components/Cards/Cards';
import AddCard from './components/AddCard/AddCard';
import React, {useState} from "react";

function App() {
  team.forEach(member => member.counter = 0)
  const [teamArr, setTeamArr] = useState(team);
  const [totalCounter, setTotalCounter] = useState(0)


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
      <AddCard handleSubmit={handleSubmit}/>
      <Cards team = {team}/>
    </div>
  );
};

export default App;
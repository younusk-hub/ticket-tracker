import "./App.scss";
import team from "./data/team";
import Cards from "./components/Cards/Cards";
import AddCard from "./components/AddCard/AddCard";
import React, { useState, useEffect } from "react";

function App() {
  const addCounter = () => {
    return team.forEach(member => (member.counter = 0));
  };
  addCounter();

  const [teamArr, setTeamArr] = useState(team);

  const [totalTickets, setTotalTickets] = useState(0);

  const handleIncrementTicket = () => {
    setTotalTickets(totalTickets + 1);
  };

  const handleDecrementTicket = () => {
    setTotalTickets(totalTickets - 1);
  };

  const handleSubmit = ticketData => {
    const stateCopy = teamArr.map(team => ({ ...team }));
    stateCopy.push({
      id: stateCopy.length + 1,
      name: ticketData.userName,
      role: ticketData.userRole,
    });
    setTeamArr(stateCopy);
  };

  return (
    <div className="app">
      <h1>Ticket Tracker </h1>
      <p>Total tickets: {totalTickets}</p>
      <AddCard handleSubmit={handleSubmit} />
      <Cards
        handleIncrementTicket={handleIncrementTicket}
        handleDecrementTicket={handleDecrementTicket}
        team={teamArr}
      />
    </div>
  );
}

export default App;

import './App.scss';
import team from './data/team';
import Cards from './components/Cards/Cards';
import AddCard from './components/AddCard/AddCard';


function App() {
  team.forEach(member => {
    member.counter = 0
  })

  return (
    <div className="app">
      <h1>Ticket Tracker</h1>
      <AddCard team = {team}/>
      <Cards team = {team}/>
      

    </div>
  );
};

export default App;
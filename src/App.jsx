// src/App.jsx
import "./App.css"
import {useState} from 'react';


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  );

  const handleAddFighter = (newFighter) => {
    if (money-newFighter.price < 0){
      console.log('Not enough money');
    } else {
      setTeam([...team, newFighter]);
      setMoney(money - newFighter.price);
      setTotalStrength(totalStrength + newFighter.strength);
      setTotalAgility(totalAgility + newFighter.agility);
    }
  }
  const handleRemoveFighter = (removedFighter) => {
    const newTeam = team.filter(fighter => (fighter.name !== removedFighter.name));
    setTeam(newTeam);
    setMoney(money + removedFighter.price);
    setTotalStrength(totalStrength - removedFighter.strength);
    setTotalAgility(totalAgility - removedFighter.agility);
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <h3>Team</h3>
      <ul>
        {team.length === 0 ? <li>Pick some team members</li>: team.map((fighter, index) => (
          <li key={index}>
          <img src={fighter.img} alt={fighter.name} />
          <p>{fighter.name}</p>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
        </li>
        ))}
      </ul>
      <h3>Fighters</h3>
      <ul>
      {zombieFighters.map((zombieFighter, index) => (
        <li key={index}>
          <img src={zombieFighter.img} alt={zombieFighter.name} />
          <p>{zombieFighter.name}</p>
          <p>Price: {zombieFighter.price}</p>
          <p>Strength: {zombieFighter.strength}</p>
          <p>Agility: {zombieFighter.agility}</p>
          <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
        </li>
      ))}
      </ul>
    </>
  );
}

export default App


import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <h1>HeyBlinken's Sports Card Inventory</h1>
      <form id="addCardForm" action="" method="post">
        <label htmlFor="brand">Set/Brand:</label>
        <input type="text" id="brand" required />

        <label htmlFor="year">Year:</label>
        <input type="number" id="year" required />

        <label htmlFor="card_number">Card Number:</label>
        <input type="text" id="card_number" required />

        <label htmlFor="player_name">Player Name:</label>
        <input type="text" id="player_name" required />

        <button type="button" id="addCardButton">Add Card</button>

      </form>
    </div>
  )
};

export default App;

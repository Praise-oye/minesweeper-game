import React from 'react';
import { Link } from 'react-router-dom';

//this displays how to play and win the game

const Help = () => {
  return (
    <div className='helpContainer'>
      <Link to= '/' className= "help">Go back to game</Link>
      <p>To win a round of Minesweeper, you must click on the board every square that doesn't have a mine under it. Once you've done so, the game will be over. If you accidentally click a square that has a mine beneath it, the game will be over. You'll have to start over game again.</p>
    </div>
  )
}

export default Help
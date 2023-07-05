import React from 'react';
import { Link } from 'react-router-dom';


//Navigation header with two links that allow the user to navigate between the game page and the help page.
const Header = () => {
  return (
    <div>
        <h1><Link to= '/'>Minesweeper Game</Link></h1>
        <h1><Link to= '/help'>Help</Link></h1>
    </div>
  )
}

export default Header
import React from 'react';
import './App.css';
import MatrixBoard from './MatrixBoard';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Help from './Help'

//navigation of the game and the help page
function App() {
  return (
    <div>
      <div className="head">
      <h1>Mine-sweeper Game</h1>
      </div>
      <div className='placing'>
      <Router>
          <Routes>
            <Route path='/' element={<MatrixBoard />} />
            <Route path='/help' element={<Help />} />
          </Routes>
        </Router>
    </div>
    </div>
  );
}

export default App;

import './App.css'
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import Player from './Player.jsx'
import PlayerScore from './PlayerScore.jsx';
import ActionIcon from './ActionIcon.jsx';
import ActionButton from './ActionButton.jsx';
import { useState } from 'react';

const actions = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper",
};

function randomAction(){

  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
}

function calculateWinner(action1, action2) {
  if(action1 === action2)
  {
    return 0;
  }
  else if(actions[action1] === action2)
  {
    return -1;
  }
  else if(actions[action2] === action1)
  {
    return 1;
  }

  // Should never happen
  return null;
}

function ShowWinner({winner = 0}){
  const text = {
    "-1": "You Win!",
    0: "It's a Tie",
    1: "You Lose!",
  };

  return (
    <h2>{text[winner]}</h2>
  )
}

function App() {
  const [playerAction, setPlayerAction] = useState("rock");
  const [computerAction, setComputerAction] = useState("paper");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(0);


  const onActionSelected = (selectedAction) => {
    const newComputerAction = randomAction();

    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);

    const newWinner = calculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner);
    if (newWinner === -1){
      setPlayerScore(playerScore + 1);
    } else if (newWinner === 1){
      setComputerScore(computerScore + 1);
    }
  
  };

  return (
    <>
    <div className="main-content">
      <div className="top-content-wrapper">
        <div className='top-content'>
          <div className='game-title'>
            <h1>Rock</h1>
            <h1>Paper</h1>
            <h1>Scissors</h1>
          </div>
          <div className='scoreboard'>
              <PlayerScore name="PLAYER" score={playerScore}/>
              <PlayerScore name="ENEMY" score={computerScore} />
          </div>
          </div>
        </div>

      <div className="choice-showcase">
          <Player name="PLAYER" action={playerAction}/>
          <Player name="ENEMY" action={computerAction} />
      </div>
      <div className="middle-content">
        <div className="choices">
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="scissor" onActionSelected={onActionSelected} />
        </div>
      </div>

      <div className="result">
        <ShowWinner winner={winner}/>
      </div>
    </div>
    </>
  )
}

export default App

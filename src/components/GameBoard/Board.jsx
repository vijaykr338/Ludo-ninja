import React, { useEffect, useState, useRef } from "react";
import bg from "../../images/ludo-bg.jpg";
import Dice from './Dice'

import "./Board.css";
import {
  STARTING_POSITIONS,
  POINT_SCORING_CONDITION,
  BASE_LOCATIONS,
  RED_PATHWAY,
  YELLOW_PATHWAY,
  BLUE_PATHWAY,
  GREEN_PATHWAY,
  GHAR_LOCATION,
} from "./constant";
import { SAFE_LOCATIONS } from "./constant";

const Board = () => {
  const [points, setPoints] = useState({
    red: 0,
    blue: 0,
    yellow: 0,
    green: 0,
  });

  const [selectedPiece, setSelectedPiece] = useState({
    color: null,
    index: null,
  });

  const baseLocations = BASE_LOCATIONS;

  const [diceRoll, setRoll] = useState(null);

  const [currentTurn, setCurrentTurn] = useState("blue");
 

  const [positions, setPositions] = useState({
    red: BASE_LOCATIONS.red,
    green: BASE_LOCATIONS.green,
    blue: BASE_LOCATIONS.blue,
    yellow: BASE_LOCATIONS.yellow,
  });

  

  const Corrector = (color, pieceIndex) => {
    let correctVal = -1;
    if (color === "red") {
      correctVal = 76 + pieceIndex;
    } else if (color === "blue") {
      correctVal = 80 + pieceIndex;
    } else if (color === "green") {
      correctVal = 84 + pieceIndex;
    } else if (color === "yellow") {
      correctVal = 88 + pieceIndex;
    }
    return correctVal;
  };

  

  const updateTurn = () => {
    const nextTurn = {
      red: "blue",
      blue: "green",
      green: "yellow",
      yellow: "red",
    };

    //basically if you are red, pass the turn to red, by this key-value approach
    setCurrentTurn(nextTurn[currentTurn]);
  };

 


  const movePieceByColor = (color, pieceIndex, steps) => {
    let newPositions = { ...positions };
    const ActualPieceIndex = Corrector(color, pieceIndex);
    console.log("This is okay", ActualPieceIndex);
    //checking if the user specified
    if (!newPositions[color] || !newPositions[color][ActualPieceIndex]) {
      console.error(
        `Invalid pieceIndex: ${ActualPieceIndex} for color: ${color}`
      );
      return;
    }

    let currentPos = newPositions[color][ActualPieceIndex];
    console.log("My current position is", currentPos);
    //This is okay
    let currentIndex;
    //finds the current index in the colored pathway
    currentIndex = currentIndexFinder(color, currentPos);
    console.log("my Current Index according to pathway is", currentIndex);

    let newIndex;
    let newPos;
    if (currentIndex === -1) {
      if (steps === 6) {
        newPos = STARTING_POSITIONS[color];
      } else {
        newPos = currentPos;
      }
      console.log("I went through this and my newIndex is ", newPos);
    } else {
      //The elephant in the room
      //steps I intend to follow
      //Rules
      //just move the piece step by step ( the function does need a step parameter )
      //if it reaches the WINNING/ POINT SCORING CONDITON - well 1 point scored - 4 points scored
      //means you win

      // if(winnerCheck(color, currentIndex) === 1){
      //   addPoint(color);
      // }

      //move the guy please

      newIndex = currentIndex + steps;
      console.log("im moving thru", newIndex);
      newPos = currentPosFinder(color, newIndex);
      //this guy above is a number but the if condition one is NOT a number which is leading to errors, just fix those and we are good to go
    }

    // let newPos = currentPosFinder(color, newIndex);
    console.log("The new position will be", newPos);

    console.log("THese are the actual locations 1st", GHAR_LOCATION);
    console.log("This is my state before assignment", newPositions);
    newPositions[color][ActualPieceIndex] = newPos;

    console.log("This is my state after assignment", newPositions);

    newPositions = killAndResetPiece(newPositions, color, newPos);

    console.log("THese are the actual locations", GHAR_LOCATION);
    console.log(
      "This is my state after assignment and KILLING",
      newPositions[color]
    );

    setPositions(newPositions);

    if (winnerCheck(color, currentIndex) === 1) {
      delete newPositions[color][ActualPieceIndex];
      addPoint(color);
      alert("We have a winner, WOHOOOOOOOOO!");
    }

    console.log("FUNCTION ENDED HERE ----------------");
  };

  const addPoint = (color) => {
    if (points.hasOwnProperty(color)) {
      points[color] += 1;
    } else {
      console.log("Invaild Color!");
    }
  };

  const winnerCheck = (color, currentIndex) => {
    if (color === "red") {
      if (
        JSON.stringify(RED_PATHWAY[currentIndex]) ===
        JSON.stringify(POINT_SCORING_CONDITION[color])
      ) {
        return 1;
      } else {
        return 0;
      }
    } else if (color === "blue") {
      if (
        JSON.stringify(BLUE_PATHWAY[currentIndex]) ===
        JSON.stringify(POINT_SCORING_CONDITION[color])
      ) {
        return 1;
      } else {
        return 0;
      }
    } else if (color === "green") {
      if (
        JSON.stringify(GREEN_PATHWAY[currentIndex]) ===
        JSON.stringify(POINT_SCORING_CONDITION[color])
      ) {
        return 1;
      } else {
        return 0;
      }
    } else if (color === "yellow") {
      if (
        JSON.stringify(YELLOW_PATHWAY[currentIndex]) ===
        JSON.stringify(POINT_SCORING_CONDITION[color])
      ) {
        return 1;
      } else {
        return 0;
      }
    } else {
      console.error(`Invalid color: ${color}`);
      return 0; // Return 0 or any other value to indicate an error
    }
  };

  const currentIndexFinder = (color, currentPos) => {
    let currentIndex;

    if (color === "red") {
      currentIndex = Object.values(RED_PATHWAY).findIndex(
        (pos) => pos[0] === currentPos[0] && pos[1] === currentPos[1]
      );
    } else if (color === "blue") {
      currentIndex = Object.values(BLUE_PATHWAY).findIndex(
        (pos) => pos[0] === currentPos[0] && pos[1] === currentPos[1]
      );
    } else if (color === "green") {
      currentIndex = Object.values(GREEN_PATHWAY).findIndex(
        (pos) => pos[0] === currentPos[0] && pos[1] === currentPos[1]
      );
    } else if (color === "yellow") {
      currentIndex = Object.values(YELLOW_PATHWAY).findIndex(
        (pos) => pos[0] === currentPos[0] && pos[1] === currentPos[1]
      );
    } else {
      console.error(`Invalid color: ${color}`);
      return -1; // Return -1 or any other value to indicate an error
    }

    return currentIndex;
  };

  const currentPosFinder = (color, currentIndex) => {
    let currentPos;

    if (color === "red") {
      currentPos = RED_PATHWAY[currentIndex];
    } else if (color === "blue") {
      currentPos = BLUE_PATHWAY[currentIndex];
    } else if (color === "green") {
      currentPos = GREEN_PATHWAY[currentIndex];
    } else if (color === "yellow") {
      currentPos = YELLOW_PATHWAY[currentIndex];
    } else {
      console.error(`Invalid color: ${color}`);
      return null; // Return null or any other value to indicate an error
    }

    return currentPos;
  };

  

  const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const isSafeLocation = (position) => {
    return SAFE_LOCATIONS.some(
      (safePos) => JSON.stringify(safePos) === JSON.stringify(position)
    );
  };

  //KILL OTHER PLAYERS WHEN OVER THEM
  // IF ANOTHER COLOR PIECE GOES OVER THE PIECE IT RESETS THE UNDERLYING PIECE RESET TO BASE LOCATION
  // const killOrNot = (newPositions, color, ActualPieceIndex) => {
  //   Object.keys(newPositions).forEach((otherColor) => {
  //     if (otherColor !== color) {
  //       console.log("What is this hsit here",newPositions[otherColor][ActualPieceIndex])
  //       newPositions[otherColor].forEach((pos, index) => {
  //         if (JSON.stringify(pos) === JSON.stringify(newPos)) {
  //           // Reset the position of the "killed" piece to its base location
  //           console.log("What is this", newPositions[otherColor][index])
  //           newPositions[otherColor][index] = BASE_LOCATIONS[otherColor][index];

  //           alert(`${color} has killed a ${otherColor} piece!`);
  //         }
  //       });
  //     }
  //   });
  // };
  const killAndResetPiece = (newPositions, currentColor, newPos) => {
    Object.keys(newPositions).forEach((otherColor) => {
      if (otherColor !== currentColor) {
        console.log(
          "not sure",
          otherColor,
          currentColor,
          newPositions[otherColor]
        );
        Object.entries(newPositions[otherColor]).forEach((pos, index) => {
          if (JSON.stringify(pos[1]) === JSON.stringify(newPos)) {
            // Find the corresponding base location for this piece

            if (isSafeLocation(pos[1])) {
              console.log(
                `${otherColor} piece is in a safe location and cannot be killed.`
              );
              return;
            }

            const actualIndex = Corrector(otherColor, index);
            console.log("PASS", actualIndex);
            //OTher color ki baseIndexValue
            console.log("PASS 2", BASE_LOCATIONS[otherColor][actualIndex]);
            // const baseLocationIndex = BASE_LOCATIONS[otherColor][actualIndex];
            // let neededIndex = currentIndexFinder(otherColor, baseLocationIndex)
            // console.log("The Base Location index is", neededIndex)
            // Reset the position of the "killed" piece to its base location

            newPositions[otherColor][actualIndex] =
              GHAR_LOCATION[otherColor][actualIndex];

            console.log(`${currentColor} has killed a ${otherColor} piece!`);
            // You can replace this with an alert or any other notification method
          }
        });
      }
    });

    return newPositions;
  };

  // Example usage
  const playTurn = () => {
   
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    // Outputs a random number between 1 and 6

    movePieceByColor(currentTurn, 0, randomNumber); // Assuming pieceIndex is 0 for simplicity

    updateTurn();
  };

 
  
  useEffect(()=>{
    console.log("change", diceRoll)
  }, [diceRoll])
  
  const HandleClick = (color, key) => { 

    const randomNumber = rollDice();
    
    console.log(randomNumber, key);

    movePieceByColor(color, key, randomNumber);
   }

   const handleRollDone = (number) => {
    setRolledNumber(number);
    movePieceByColor(currentPlayer, 0, number); // Assuming pieceIndex is 0 for simplicity
    updateTurn();
  };


  return (
    <div className="ludo">
      <div className="ludo-container">
      {Object.keys(positions).map((color) =>
          Object.entries(positions[color]).map(([key, position]) => (
            <div
              key={`${color}-${key}`}
              className={`player-piece ${color} ${currentTurn === color ? 'highlight' : ''}`}
              style={{
                gridRow: position[0],
                gridColumn: position[1],
              }}
              onClick={() => HandleClick(color, key)}
            ></div>
          ))
        )}
      </div>
      <div className="info">

      <div className="dice-container">
        <button onClick={() => playTurn("red", 0)}>Play Turn</button>
        <Dice onRollDone={handleRollDone} />
       
      </div>
      <div className="container-info">
        <p>Current Player's Turn: {`${currentTurn}`}</p>
        <p>Dice Roll: {`${diceRoll}`}</p>
      </div>
      </div>
    </div>
  );
};

export default Board;

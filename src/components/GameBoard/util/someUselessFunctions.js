const findKeyByValue = (obj, value) => {
    return Object.keys(obj).find(
      (key) => obj[key][0] === value[0] && obj[key][1] == value[1]
    );
  };


  const DirectionTurner = (color, currentIndex) => {
    let myDesiredVal;

    if (color === "red") {
      myDesiredVal = 53;
    } else if (color === "blue") {
      myDesiredVal = 59;
    } else if (color === "green") {
      myDesiredVal = 65;
    } else if (color === "yellow") {
      myDesiredVal = 71;
    }
    console.log("Direction Turner was called here!");
    return myDesiredVal;
  };

  const canPawnMove = (pawn, rolledNumber) => {
    console.log("We can do it", pawn.position[0])
    // If the pawn is in the base and the rolled number is 1 or 6, it can move out of the base
    if ((rolledNumber === 1 || rolledNumber === 6) && JSON.stringify(pawn.position) === JSON.stringify(pawn.basePos)) {
      return true;
    } else if (JSON.stringify(pawn.position) !== JSON.stringify(pawn.basePos)) {
      // If the pawn is not in the base, check if it can move within the board limits
      switch (pawn.color) {
        case 'red':
          if (pawn.position[0] + rolledNumber <= 73) return true;
          break;
        case 'blue':
          if (pawn.position[0] + rolledNumber <= 79) return true;
          break;
        case 'green':
          if (pawn.position[0] + rolledNumber <= 85) return true;
          break;
        case 'yellow':
          if (pawn.position[0] + rolledNumber <= 91) return true;
          break;
        default:
          return false;
      }
    } else {
      return false;
    }
  };

  const movePiece = (color, pieceIndex, steps) => {
    console.log(color, pieceIndex, steps);
    const newPositions = { ...positions };
    const ActualPieceIndex = Corrector(color, pieceIndex);
    console.log(
      newPositions[color][ActualPieceIndex],
      "God will forgive you, but I wont"
    );

    if (!newPositions[color] || !newPositions[color][ActualPieceIndex]) {
      console.error(
        `Invalid pieceIndex: ${ActualPieceIndex} for color: ${color}`
      );
      return;
    } else {
      console.log("Pass");
    }

    const currentPos = newPositions[color][ActualPieceIndex];
    console.log("1st currentPos: ", currentPos);
    let currentIndex;
    currentIndex = Object.values(POSSIBLE_LOCATIONS).findIndex(
      (pos) => pos[0] === currentPos[0] && pos[1] === currentPos[1]
    );
    let isItHome = false;
    if (currentIndex === -1) {
      console.log("Tell me just what is this", HOME_LOCATIONS[color]);

      const currentIndex = Object.entries(HOME_LOCATIONS[color]).find(
        ([key, pos]) => pos[0] === currentPos[0] && pos[1] === currentPos[1]
      );

      console.log("Give me an Update okay?", currentIndex);
      //IF THE VALUE IS STILL -1 THEN GO AHEAD MOVE TO STARTING POSITION
    }
    console.log("1st newPositions: ", newPositions);
    console.log("2nd currentPos: ", currentPos);
    console.log("3rd currentIndex: ", currentIndex);

    //This is where we decide where the piece will go
    let newIndex;
    //got the piece out of home via below
    //The new index here is an array of X and Y position
    //DO NOT MOVE TO START LOCATION IF
    if (currentIndex === -1) {
      newIndex = STARTING_POSITIONS[color];
      console.log("I went through this and my newIndex is ", newIndex);
    }
    //now where to move it
    //but the NewIndex here is just a number, refer to constantjs for that
    else {
      console.log(currentIndex);
      console.log("I dont get it", POSSIBLE_LOCATIONS[currentIndex - 1]);
      console.log("wat", TURNING_POINTS[color]);

      if (
        JSON.stringify(POSSIBLE_LOCATIONS[currentIndex - 1]) ===
        JSON.stringify(TURNING_POINTS[color])
      ) {
        newIndex = DirectionTurner(color, currentIndex);
        console.log(newIndex);
      } else {
        newIndex = currentIndex + steps;
      }
      console.log("Thou shall Pass", newIndex);
    }
    console.log("I am just saying", newIndex);
    let something;
    let newPos;
    if (Array.isArray(newIndex)) {
      something = findKeyByValue(POSSIBLE_LOCATIONS, newIndex);
      newPos = POSSIBLE_LOCATIONS[something];
    } else {
      if (newIndex > 51) {
        newPos = HOME_LOCATIONS[color][newIndex];
        console.log("I passed through there 1st", newPos);
      } else {
        newPos = POSSIBLE_LOCATIONS[newIndex];
        console.log("I passed through there 2nd");
      }
    }
    console.log(something, "Will you yield or not?");
    console.log("try me monkey", newPos);
    newPositions[color][ActualPieceIndex] = newPos;
    setPositions(newPositions);
    console.log(positions);
    console.log("FUNCTION FINISHED-----------");
  };


  const getMovablePieces = (color) => {
  
    return Object.keys(positions[color]).filter((index) => {
      console.log("THIS", index)
      
      const position = positions[color][index];
      console.log(canPawnMove({ color, position, basePos: baseLocations[color][index] }, diceRoll))
      return canPawnMove({ color, position, basePos: baseLocations[color][index] }, diceRoll) ;
    });
  };

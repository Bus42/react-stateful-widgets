import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const initialBoardState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [board, setBoard] = useState(initialBoardState);
  useEffect(() => {
    console.log("useEffect test");
  }, [board]);

  function clearBoard() {
    setBoard(initialBoardState);
  }

  const wrapper = {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-evenly",
    width: "200px",
    height: "200px",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  const spanStyle = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "8px",
    padding: "1rem",
    height: "30px",
    width: "30px"
  };

  function selectSquare(event) {
    const square = event.target;
    console.log(square.id);
    const xCoord = square.id[0];
    const yCoord = square.id[1];
    const newBoard = [...board];
    newBoard[xCoord][yCoord] = "X";
    setBoard(newBoard);
    computerChoosesSquare();
  }

  function computerChoosesSquare(){
      const squares = document.querySelectorAll(".square");
      const xSquares = Array.from(squares).filter(square => square.textContent === "X");
      const oSquares = Array.from(squares).filter(square => square.textContent === "O");
      const emptySquares = Array.from(squares).filter(square => square.textContent === null);
      console.log(xSquares);
  }

  return (
    <div className="container">
      <h2>Tic Tac Toe</h2>
      <div className="wrapper" style={wrapper}>
        {board.map((row, rowIndex) => (
          <div className="row" style={rowStyle} key={rowIndex}>
            {row.map((column, columnIndex) => (
              <span
                className="square"
                style={spanStyle}
                id={`${rowIndex}${columnIndex}`}
                onClick={selectSquare}
                key={`${rowIndex}${columnIndex}`}
              >
                {column}
              </span>
            ))}
          </div>
        ))}
      </div>
      <button onClick={clearBoard}>Clear Board</button>
    </div>
  );
};

export default TicTacToe;

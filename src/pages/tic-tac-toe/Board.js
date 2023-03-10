import React, {useState} from 'react';
import Square from "./Square";
import {Container} from "@mui/material";
import ReactConfetti from 'react-confetti';



function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true);


    const handleClick = (i) => {
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = isX ? 'X' : 'O'
        setSquares(squares)
        setIsX(!isX)
    }

    const winner = calculateWinner(squares)
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = 'Next player: ' + (isX ? 'X' : 'O');
    }

    // if (status === `Winner: ${winner}`) {
    //     return (
    //         explodeConfetti()
    //     )
    // }

    const handleRestart = () => {
        setIsX(true)
        setSquares(Array(9).fill(null))
    }

    function calculateWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }


    return (
        <div>
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

        <div className="board">
                <h1 className="header">TIC-TAC-TOE</h1>
            <div className="header2">
                {status}
                {status === `Winner: ${winner}` ? <ReactConfetti width={window.innerWidth}  /> : null}
            </div>
            <div className="board-row">
                <Square className="elements" value={squares[0]} onClick={() => handleClick(0)}/>
                <Square value={squares[1]} onClick={() => handleClick(1)}/>
                <Square value={squares[2]} onClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => handleClick(3)}/>
                <Square value={squares[4]} onClick={() => handleClick(4)}/>
                <Square value={squares[5]} onClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => handleClick(6)}/>
                <Square value={squares[7]} onClick={() => handleClick(7)}/>
                <Square value={squares[8]} onClick={() => handleClick(8)}/>
            </div>
            <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <button className="button" onClick={handleRestart}>Restart game!</button>
            </Container>
        </div>

    </Container>
        </div>
      
    );
};


export default Board;
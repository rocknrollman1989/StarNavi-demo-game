import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameCell from 'components/GameCell';
import { findRandomCell } from 'helpers';


const GameFieldSection = ({ selectedGame }) => {
  const { delay, field } = selectedGame;

  const [colorChangeDelay, setColorChangeDelay] = useState(0);
  const [activeCell, setActiveCell] = useState(0);
  const [roundWinPoinds, setRoundWinPoinds] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [gamerPoints, setGamerPoints] = useState(0);
  const [usedCells, setUsedCells] = useState([]);

  const totalCellNumber = field ** 2;

  useEffect(() => {
    setColorChangeDelay(delay);
    setRoundWinPoinds(Math.ceil(totalCellNumber / 2) + 1);
  }, [delay]);

  useEffect(() => {
    const changeActiveCell = setInterval(() => {
      setActiveCell(findRandomCell(totalCellNumber, usedCells));
    }, delay);
    return () => clearInterval(changeActiveCell);
  }, [delay]);

  const gamerClick = (cellId) => {
    console.log(colorChangeDelay, roundWinPoinds);
    setGamerPoints(gamerPoints + 1);
    setUsedCells([...usedCells, cellId]);
  };

  const computerSetPoint = (cellId) => {
    setUsedCells([...usedCells, cellId]);
    setComputerPoints(computerPoints + 1);
  };

  const GameField = () => {
    const column = [];
    let cellId = 0;

    if (field) {
      let row = [];
      for (let i = 0; i < field; i += 1) {
        for (let j = 0; j < field; j += 1) {
          row.push(<GameCell
            key={cellId}
            cellId={cellId}
            gamerClick={gamerClick}
            computerSetPoint={computerSetPoint}
            activeCell={activeCell}
            // activeColor={cellId === activeCell ? true : null}
          />);
          cellId += 1;
        }
        column.push(
          <div className="l-row" key={i}>{row}</div>,
        );
        row = [];
      }
      return column;
    }
    return null;
  };

  return (
    <div className="game-field">
      <GameField />
    </div>
  );
};

GameFieldSection.propTypes = {
  selectedGame: PropTypes.shape({
    field: PropTypes.number, delay: PropTypes.number,
  }),
};

export default GameFieldSection;

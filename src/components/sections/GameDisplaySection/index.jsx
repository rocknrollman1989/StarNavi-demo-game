import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSelectOptionsArray } from 'helpers';
import CustomTextInput from 'components/formInputs/CustomTextInput';
import CustomSelectInput from 'components/formInputs/CustomSelectInput';
import GameFieldSection from 'components/sections/GameFieldSection';
import { getGameOptions, setGameValue, clearWinner } from 'store/actions/gameDisplay';
import style from './index.module.css';

const GameDisplaySection = (props) => {
  const {
    getOptions, gameSelectOptions, setGame, selectedGame, winner, deleteWinner,
  } = props;
  const [gameMode, setGameMode] = useState('');
  const [userName, setUserName] = useState('');
  const [isGameProcess, setIsGameProcess] = useState(false);

  useEffect(() => {
    getOptions();
  }, []);

  useEffect(() => {
    setIsGameProcess(false);
  }, [winner]);

  const setPlayerName = (value) => {
    setUserName(value);
  };

  const setGameOptions = (option) => {
    setGameMode(option);
  };

  const startGame = () => {
    setIsGameProcess(true);
    deleteWinner();
    setGame({ gameMode, userName });
  };

  return (
    <div className={`${style.game__display} l-row`}>
      <div className="l-column">
        <div className="l-row">
          <CustomSelectInput
            options={gameSelectOptions}
            setGameOptions={setGameOptions}
            disabled={isGameProcess ? true : null}
          />
          <CustomTextInput
            setPlayerName={setPlayerName}
            disabled={isGameProcess ? true : null}
          />
          <button type="button" onClick={() => { startGame(); }} disabled={gameMode && userName && !isGameProcess ? null : true}>Play</button>
        </div>
        { winner && <h1>{`${winner} WIN!`}</h1>}
        { selectedGame && Object.keys(selectedGame).length && <GameFieldSection isGameProcess={isGameProcess} />}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getOptions: () => dispatch(getGameOptions()),
  setGame: (value) => dispatch(setGameValue(value)),
  deleteWinner: () => clearWinner(),
});

const mapStateToProps = (state) => {
  const { gameDisplay } = state;
  return {
    gameSelectOptions: createSelectOptionsArray(gameDisplay.gameOptions),
    selectedGame: gameDisplay.selectedGameValue,
    winner: gameDisplay.winner,
  };
};

GameDisplaySection.propTypes = {
  getOptions: PropTypes.func,
  gameSelectOptions: PropTypes.arrayOf(PropTypes.shape({})),
  setGame: PropTypes.func,
  deleteWinner: PropTypes.func,
  winner: PropTypes.string,
  selectedGame: PropTypes.shape({
    field: PropTypes.number, delay: PropTypes.number,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(GameDisplaySection);

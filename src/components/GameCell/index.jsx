import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';

const GameCell = ({ gamerClick }) => {
  useEffect(() => {
    console.log('sdfsdf');
  }, []);
  return (
    <div className={style.game__cell} onClick={gamerClick ? () => { gamerClick('!!!'); } : null} aria-hidden="true" />
  );
};

GameCell.propTypes = {
  gamerClick: PropTypes.func,
};

export default GameCell;

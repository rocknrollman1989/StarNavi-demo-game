import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './index.module.css';

class GameCell extends React.Component {
  state = {
    userActiveCell: false,
    computerActiveCell: false,
  }

  componentDidUpdate(prevProps) {
    const { cellId } = this.props;
    const { userActiveCell } = this.state;
    if (userActiveCell) {
      return;
    }
    if (cellId === prevProps.activeCell) {
      this.computerClick();
    }
  }

  handleClick = () => {
    const { gamerClick, activeCell } = this.props;
    this.setState({
      userActiveCell: true,
    });
    gamerClick(activeCell);
  };

  computerClick = () => {
    const { computerClick, activeCell } = this.props;
    this.setState({
      computerActiveCell: true,
    });
    computerClick(activeCell);
  };

  render() {
    const { activeCell, cellId } = this.props;
    const { userActiveCell, computerActiveCell } = this.state;

    return (
      <>
        <div
          className={`${style.game__cell} ${cellId === activeCell ? style.game__cell_active : ''} ${userActiveCell ? style.game__cell_user : ''} ${computerActiveCell ? style.game__cell_computer : ''}`}
          onClick={cellId === activeCell ? () => { this.handleClick(); } : null}
          aria-hidden="true"
        />
      </>
    );
  }
}

GameCell.propTypes = {
  gamerClick: PropTypes.func,
  activeCell: PropTypes.number,
  cellId: PropTypes.number,
  computerClick: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { gameDisplay } = state;
  return {
    activeCell: gameDisplay.activeCell,
  };
};

export default connect(mapStateToProps, null)(GameCell);

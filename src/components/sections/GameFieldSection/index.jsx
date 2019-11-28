import React from 'react';
import PropTypes from 'prop-types';
import GameCell from 'components/GameCell';
import { findRandomCell } from 'helpers';
import { connect } from 'react-redux';
import { setActiveCell, setWinner } from 'store/actions/gameDisplay';

class GameFieldSection extends React.Component {
  state = {
    totalCellNumber: null,
    usedCells: [],
    userCLickedCells: 0,
    computerUsedCells: 0,
  }

  componentDidMount() {
    this.gameStart();
  }

  shouldComponentUpdate(prevProps, prevState) {
    const {
      usedCells, userCLickedCells, computerUsedCells,
    } = this.state;
    const { isGameProcess } = this.props;
    if (usedCells.length !== prevState.usedCells.length) {
      return false;
    }
    if (userCLickedCells !== prevState.userCLickedCells) {
      return false;
    }
    if (computerUsedCells !== prevState.computerUsedCells) {
      return false;
    }
    if (prevProps.isGameProcess !== isGameProcess && prevProps.isGameProcess === true) {
      this.gameStart();
    }
    return true;
  }

  componentWillUnmount() {
    this.stopIntnerval();
  }

  gameStart = () => {
    const { selectedGame } = this.props;
    this.setState({
      totalCellNumber: selectedGame.field ** 2,
      usedCells: [],
      userCLickedCells: 0,
      computerUsedCells: 0,
    }, () => {
      this.startInterval();
    });
  }

  startInterval = () => {
    const { selectedGame } = this.props;

    this.changeActiveCell = setInterval(() => {
      this.checkGameProgress();
    }, selectedGame.delay);
  }

  restartInterval = () => {
    this.stopIntnerval();
    this.checkGameProgress();
    this.startInterval();
  }

  stopIntnerval = () => {
    const { setNewActiveCell } = this.props;
    clearInterval(this.changeActiveCell);
    setNewActiveCell(null);
  }

  checkGameProgress = () => {
    const { usedCells, totalCellNumber } = this.state;
    const { setNewActiveCell } = this.props;
    if (usedCells.length >= totalCellNumber) {
      this.stopIntnerval();
      this.setWinner();
      return;
    }
    setNewActiveCell(findRandomCell(totalCellNumber, usedCells));
  }

  gamerClick = (cellId) => {
    const { usedCells, userCLickedCells } = this.state;
    this.setState({
      usedCells: [...usedCells, cellId],
      userCLickedCells: userCLickedCells + 1,
    },
    () => {
      this.restartInterval();
    });
  };

  computerClick = (cellId) => {
    const { usedCells, computerUsedCells } = this.state;
    this.setState({
      usedCells: [...usedCells, cellId],
      computerUsedCells: computerUsedCells + 1,
    });
  }

  setWinner = () => {
    const { setNewWinner, gamerName } = this.props;
    const { userCLickedCells, computerUsedCells } = this.state;
    const winner = userCLickedCells > computerUsedCells ? gamerName : 'computer';
    setNewWinner(winner);
  }

  render() {
    const { selectedGame } = this.props;

    const GameField = () => {
      const column = [];
      let cellId = 1;

      if (selectedGame.field) {
        let row = [];
        for (let i = 0; i < selectedGame.field; i += 1) {
          for (let j = 0; j < selectedGame.field; j += 1) {
            row.push(<GameCell
              key={cellId}
              cellId={cellId}
              gamerClick={this.gamerClick}
              computerClick={this.computerClick}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  setNewActiveCell: (value) => dispatch(setActiveCell(value)),
  setNewWinner: (value) => dispatch(setWinner(value)),
});

const mapStateToProps = (state) => {
  const { gameDisplay } = state;
  return {
    selectedGame: gameDisplay.selectedGameValue,
    gamerName: gameDisplay.gamerName,
  };
};

GameFieldSection.propTypes = {
  field: PropTypes.number,
  setNewActiveCell: PropTypes.func,
  setNewWinner: PropTypes.func,
  gamerName: PropTypes.string,
  isGameProcess: PropTypes.bool,
  selectedGame: PropTypes.shape({
    field: PropTypes.number, delay: PropTypes.number,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(GameFieldSection);

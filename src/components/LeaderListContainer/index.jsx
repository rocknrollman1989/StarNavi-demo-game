import React from 'react';
import PropTypes from 'prop-types';

const LeaderListContainer = ({ winner, date }) => (
  <div className="l-row">
    { winner && <p>{ winner }</p> }
    { date && <p>{ date }</p> }
  </div>
);

LeaderListContainer.propTypes = {
  winner: PropTypes.string,
  date: PropTypes.string,
};

export default LeaderListContainer;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getLeaderList from 'store/actions/leaderBoard';
import LeaderListContainer from 'components/LeaderListContainer';
import style from './index.module.css';

const LeaderListSection = (props) => {
  useEffect(() => {
    props.getLeaderList();
  }, []);

  const { isGetListError, leaderList } = props;
  const leader = leaderList && leaderList.length
    ? leaderList.map((person, index) => {
      if (leaderList.length - 5 < index) {
        return <LeaderListContainer winner={person.winner} date={person.date} key={person.id} />;
      }
      return null;
    })
    : null;

  return (
    <div className={`${style.leader__list} l-row`}>
      <div className="l-column">
        <h2>Leader Board</h2>
        { isGetListError && <h3>Sorry, we can&apos;t load leader&apos;s tabble</h3> }
        <div className={`${style.leader__container} l-column`}>
          { leader }
        </div>
      </div>
    </div>
  );
};

LeaderListSection.propTypes = {
  getLeaderList: PropTypes.func,
  isGetListError: PropTypes.bool,
  leaderList: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapDispatchToProps = (dispatch) => ({
  getLeaderList: () => dispatch(getLeaderList()),
});

const mapStateToProps = (state) => {
  const { leaderBoard } = state;
  return {
    isGetListError: leaderBoard.isError,
    leaderList: leaderBoard.leaderList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderListSection);

import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logAction';
import PropTypes from 'prop-types';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs here</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  // log: state.log,
  log: state.log,
});

Logs.propTypes = {
  getLogs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getLogs })(Logs);

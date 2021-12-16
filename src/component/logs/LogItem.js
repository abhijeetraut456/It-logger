import React from 'react';
import Moment from 'react-moment';
import { deleteLog, setCurrent } from '../../actions/logAction';
import { connect } from 'react-redux';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { id, tech, attention, message, date } = log;
  const onDelete = () => {
    deleteLog(id);
  };
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
          onClick={() => setCurrent(log)}
        >
          {message}
        </a>
        <br />

        <span className='grey-text'>
          <span className='black-text'>ID # {`${id}`} </span> last update by{' '}
          <span className='black-text'>{tech}</span> on{' '}
          <Moment format='Do MMMM YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href='' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLog, setCurrent })(LogItem);

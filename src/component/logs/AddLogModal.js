import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../../actions/logAction';
import { connect } from 'react-redux';
import TechSelectOption from '../techs/TechSelectOption';
const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [tech, setTech] = useState('');
  const [attention, setAttention] = useState(false);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: `Please Enter message and tech` });
    } else {
      addLog({
        message,
        tech,
        attention,
        date: new Date(),
      });
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter system log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <TechSelectOption />
              {/* <option value='John Doe'>John Doe</option>
              <option value='Jil johnson'>Jill Johnson</option>
              <option value='brad traversy'>brad traversy</option> */}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Need Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue wave-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};
export default connect(null, { addLog })(AddLogModal);

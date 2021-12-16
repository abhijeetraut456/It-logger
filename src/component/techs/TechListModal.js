import React, { useEffect, useState } from 'react';
import TechList from './TechList';
import { connect } from 'react-redux';
import { getTech } from '../../actions/techActions';

const TechListModal = ({ getTech, tech: { techs, loading } }) => {
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTech();
  }, []);

  //get logs
  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch('/techs');
  //   const data = await res.json();

  //   setTechs(data);
  //   setLoading(false);
  // };

  return (
    <div className='modal' id='tech-list-modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechList key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTech })(TechListModal);

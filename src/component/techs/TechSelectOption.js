import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTech } from '../../actions/techActions';

const TechSelectOption = ({ getTech, tech: { loading, techs } }) => {
  useEffect(() => {
    getTech();
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((tech) => (
      <option key={tech.id} tech={`${tech.firstName}${tech.lastName}`}>
        {tech.firstName}
        {tech.lastName}
      </option>
    ))
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTech })(TechSelectOption);

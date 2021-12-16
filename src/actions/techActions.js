import {
  ADD_TECHS,
  TECHS_ERROR,
  GET_TECHS,
  DELETE_TECHS,
  SET_LOADING,
} from './types';

// Get technician
export const getTech = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Add Technician on server
export const addTechs = (tech) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Delete contact
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`techs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_TECHS,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
    });
  }
};

//Set loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

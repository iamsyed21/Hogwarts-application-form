export const updateUser = (dispatch, userData) => {
    dispatch({ type: 'UPDATE_USER', payload: userData });
  };
  
export const resetUser = (dispatch) => {
    dispatch({ type: 'RESET_USER' });
  };  
export const initialState = {
    firstName: "",
    lastName: "",
    givenName: "",
    nationality: "",
    age: 0,
    gender: "",
    stepFormProgress: 0,
    hogwartsHouse: "",
  };

const userReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_USER':
        return {
          ...state,
          ...action.payload,
        };
      case 'RESET_USER':
        return initialState; // Reset user data to initial state
      default:
        return state;
    }
  };
  
  export default userReducer;
  
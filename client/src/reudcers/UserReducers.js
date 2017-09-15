import {ADD_USER} from "../actions/UserActions";

const UserReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        users: [
          ...state.users,
          {
            firstaname: action.text,
            lastname: action.text,
            email: action.text,
            password: action.text
          }
        ]
      });
    default:
      return state
  }
};

export default UserReducer;
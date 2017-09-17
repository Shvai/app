import {GET_USER,GET_USERS} from "../actions/UserActions";

function users(
  state = {
    users: [],
    addVisible: false,
    editVisible: false,
    filterText: ''
  },
  action) {
  switch (action.type) {
    case GET_USER:
    case GET_USERS:
      return Object.assign({}, state, {
        addVisible: false,
        editVisible: false,
        filterText: '',
        users: action.posts,
        lastUpdated: action.receivedAt
        }
      );
    default:
      return state
  }
}

function seletedUser(state = 'users', action) {
  switch (action.type) {
    case GET_USER:
      return action.Users;
    default:
      return state
  }
}

function getUsers(state = {}, action) {
  switch (action.type) {
    case GET_USER:
    case GET_USERS:
      return Object.assign({}, state, {
        [action.Users]: users(state[action.Users], action)
      });
    default:
      return state
  }
}



export default UserReducer;
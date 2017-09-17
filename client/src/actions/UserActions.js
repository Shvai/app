export const ADD_USER = 'ADD_USER';
export const GET_USERS ='GET_USERS';
export const GET_USER ='GET_USER';

export function addUser(Users) {
  return {
    type: ADD_USER,
    Users
  }
}

export function getUsers(Users) {
  return {
    type: GET_USERS,
    Users
  }
}

export function getUser(Users, json) {
  return {
    type: GET_USER,
    Users,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}


export const ADD_USER = 'ADD_USER';

export function addUser(User) {
  return {
    type: ADD_USER,
    User
  }
}
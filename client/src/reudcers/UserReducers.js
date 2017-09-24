export function usersHasError(state = false, action) {
  switch (action.type) {
    case 'USERS_HAS_ERROR':
      return action.hasError;
    default:
      return state;
  }
}
export function usersIsLoading(state = false, action) {
  switch (action.type) {
    case 'USERS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}
export function users(state = [], action) {
  switch (action.type) {
    case 'USERS_FETCH_DATA_SUCCESS':
      return action.users;
    default:
      return state;
  }
}

export const USERS_FETCH_DATA_SUCCESS ='USERS_FETCH_DATA_SUCCESS';
export const USERS_HAS_ERROR ='USERS_HAS_ERROR';
export const USERS_IS_LOADING ='USERS_IS_LOADING';

export function usersHasError(bool) {
  return {
    type: 'USERS_HAS_ERROR',
    hasError: bool
  };
}
export function usersIsLoading(bool) {
  return {
    type: 'USERS_IS_LOADING',
    isLoading: bool
  };
}

export function usersFetchDataSuccess(users) {
  return {
    type: USERS_FETCH_DATA_SUCCESS,
    users
  }
}

export function errorAfterFiveSeconds() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(usersHasError(true));
    }, 5000);
  };
}

export function usersFetchData(url) {
  return (dispatch) => {
    dispatch(usersIsLoading(true));
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        dispatch(usersIsLoading(false));
        return res;
      })
      .then((res) => res.json())
      .then((users) => dispatch(usersFetchDataSuccess(users)))
      .catch(() => dispatch(usersHasError(true)));
  };
}


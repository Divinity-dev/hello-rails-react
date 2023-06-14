export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

export const fetchGreeting = () => {
  return dispatch => {
    fetch('/api/messages/random_greeting')
      .then(response => response.json())
      .then(data => dispatch(fetchGreetingSuccess(data.greeting)))
      .catch(error => console.error(error));
  };
};

export const fetchGreetingSuccess = greeting => {
  return {
    type: FETCH_GREETING_SUCCESS,
    greeting
  };
};

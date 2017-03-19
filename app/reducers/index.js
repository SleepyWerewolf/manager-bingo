const number = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    default:
      return state || 0;
  }
};

export default {
  number
};

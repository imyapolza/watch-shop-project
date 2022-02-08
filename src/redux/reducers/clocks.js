const initalState = {
  items: [],
  isLoaded: false,
};

const clocks = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_CLOCKS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default clocks;

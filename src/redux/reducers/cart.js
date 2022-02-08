const initalState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_CLOCK_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const allClocks = [].concat.apply([], Object.values(newItems));
      const totalPrice = allClocks.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allClocks.length,
        totalPrice,
      };
    }
    case 'REMOVE_CLOCK_CART': {
      const newItems = {
        ...state.items,
      };

      const currentTotalPrice = newItems[action.payload][0].price;
      const currentTotalCount = newItems[action.payload].length;

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice * state.items[action.payload].length,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case 'REMOVE_ALL_CLOCK_CART': {
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }

    case 'PLUS_CLOCK_CART': {
      const newItems = {
        ...state.items,
      };
      state.items[action.payload].push(state.items[action.payload][0]);

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice + state.items[action.payload][0].price,
        totalCount: state.totalCount + 1,
      };
    }

    case 'MINUS_CLOCK_CART': {
      const price = state.items[action.payload][0].price;

      const newItems = {
        ...state.items,
      };
      state.items[action.payload].shift();

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - price,
        totalCount: state.totalCount - 1,
      };
    }

    default:
      return state;
  }
};

export default cart;

export const addClockToCart = (clockObj) => ({
  type: 'ADD_CLOCK_CART',
  payload: clockObj,
});

export const removeClockToCart = (id) => ({
  type: 'REMOVE_CLOCK_CART',
  payload: id,
});

export const removeAllClockToCart = () => ({
  type: 'REMOVE_ALL_CLOCK_CART',
});

export const plusClockToCart = (id) => ({
  type: 'PLUS_CLOCK_CART',
  payload: id,
});

export const minusClockToCart = (id) => ({
  type: 'MINUS_CLOCK_CART',
  payload: id,
});


import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchClocks = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://clocks?${category != null ? `category=${category}` : ``}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setClocks(data));
    });
};

export const setClocks = (items) => ({
  type: 'SET_CLOCKS',
  payload: items,
});

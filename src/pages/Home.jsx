import React from 'react';

import { Categories, SortPopup, ClockBlock, ClockLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchClocks } from '../redux/actions/clocks';
import { addClockToCart } from '../redux/actions/cart.js';

const categoryNames = ['Adriatica', 'Citizen', 'Casio', 'Anne Klein', 'Candino'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ clocks }) => clocks.items);
  const isLoaded = useSelector(({ clocks }) => clocks.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchClocks(category, sortBy));
  }, [category, dispatch, sortBy]);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  const handleClockToCart = (obj) => {
    dispatch(addClockToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все наручные часы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <ClockBlock
                onClickAddClock={handleClockToCart}
                key={obj.id}
                isLoading={true}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <ClockLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;

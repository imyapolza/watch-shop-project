import React from 'react';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickItem,
  onClickCategory,
}) {
  const [menuActive, setMenuActive] = useState(false);
  const menuIcon = useRef(null);

  return (
    <div className="categories">
      <div
        className="burger-btn"
        ref={menuIcon}
        onClick={() => {
          setMenuActive(!menuActive);
        }}>
        <span></span>
      </div>
      <div className={menuActive ? 'mobile__menu' : 'mobile__menu disabled__menu'}>
        <ul>
          <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => {
              onClickCategory(null);
              setMenuActive(false);
            }}>
            Все
          </li>
          {items &&
            items.map((item, index) => (
              <li
                key={`${item}_${index}`}
                className={activeCategory === index ? 'active' : ''}
                onClick={() => {
                  onClickCategory(index);
                  setMenuActive(false);
                }}>
                {item}
              </li>
            ))}
        </ul>
      </div>

      <div className="menu">
        <ul>
          <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => onClickCategory(null)}>
            Все
          </li>
          {items &&
            items.map((item, index) => (
              <li
                key={`${item}_${index}`}
                className={activeCategory === index ? 'active' : ''}
                onClick={() => onClickCategory(index)}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string),
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;

import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import LoadingBlock from './LoadingBlock';
import Button from '../Button';

function ClockBlock({ id, imageUrl, name, types, sizes, price, isLoading, onClickAddClock }) {
  const availableTypes = ['темный', 'светлый'];
  const availableSizes = [1, 2, 3];

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddClock = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };
    onClickAddClock(obj);
  };

  return (
    <div className="clock-block">
      <img className="clock-block__image" src={imageUrl} alt="Clock" />
      <h4 className="clock-block__title">{name}</h4>

      <div className="clock-block__selector">
        <div className="clock-block__color">Цвет</div>
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}>
              {type}
            </li>
          ))}
        </ul>
        <div className="clock-block__type">Тип</div>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}>
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="clock-block__bottom">
        <div className="clock-block__price">{price} ₽</div>
        <Button onClick={onAddClock} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"></path>
          </svg>
          <span>Добавить</span>
          <i>1</i>
        </Button>
      </div>
    </div>
  );
}

ClockBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
};

ClockBlock.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: [],
};
export default ClockBlock;

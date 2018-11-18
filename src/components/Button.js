import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';
/**
 * @description basic button component
 * @param {string} [props.className=''] - custom class name
 * @param {string} props.label - button label
 * @param {string} [props.tabIndex='0']
 * @param {function} props.onClick - trigger by on click button
 * @param {function} [props.onHover=()=>{}] - trigger by mouse over button and on focus
 * @param {function} [props.onLeave=()=>{}] - trigger by mouse out button and on blur
 * */
export default function Button(props) {
  const {
    className, label, onClick, tabIndex, onHover, onLeave, style,
  } = props;
  const buttonClasses = classNames(
    styles.container,
    styles.basic,
    className,
  );

  return (
    <button
      tabIndex={tabIndex}
      className={buttonClasses}
      style={style}
      type="button"
      onClick={onClick}
      onMouseOver={onHover}
      onFocus={() => {
        onHover();
      }}
      onMouseOut={onLeave}
      onBlur={() => {
        onLeave();
      }}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  tabIndex: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape(),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func,
  onLeave: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  style: {},
  tabIndex: '0',
  onHover: () => {},
  onLeave: () => {},
};

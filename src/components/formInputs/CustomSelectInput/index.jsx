import React from 'react';
import PropTypes from 'prop-types';


const CustomSelectInput = ({ options, setGameOptions, disabled }) => {
  const setGameOption = (e) => {
    const { value } = e.target;
    setGameOptions(value);
  };

  const option = options && options.length ? options.map((item) => (
    Object.keys(item).map((key) => (
      <option key={item[key]} value={key}>{item[key]}</option>
    ))
  )) : null;
  return (
    <>
      <select onChange={setGameOption} disabled={disabled}>
        <option value="">select game mode</option>
        {option}
      </select>
    </>
  );
};

CustomSelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})),
  setGameOptions: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CustomSelectInput;

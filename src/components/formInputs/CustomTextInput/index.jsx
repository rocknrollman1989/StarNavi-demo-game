import React from 'react';
import PropTypes from 'prop-types';

const CustomTextInput = ({ setPlayerName }) => {
  const onchange = (e) => {
    const { value } = e.target;
    setPlayerName(value);
  };

  return (
    <>
      <input type="text" onChange={onchange} />
    </>
  );
};

CustomTextInput.propTypes = {
  setPlayerName: PropTypes.func,
};

export default CustomTextInput;

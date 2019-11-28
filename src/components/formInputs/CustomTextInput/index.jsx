import React from 'react';
import PropTypes from 'prop-types';

const CustomTextInput = ({ setPlayerName, disabled }) => {
  const onchange = (e) => {
    const { value } = e.target;
    setPlayerName(value);
  };

  return (
    <>
      <input type="text" onChange={onchange} disabled={disabled} />
    </>
  );
};

CustomTextInput.propTypes = {
  setPlayerName: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CustomTextInput;

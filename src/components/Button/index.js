import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper } from '../Button/Button.styles';

const Button = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

Button.prototype = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;

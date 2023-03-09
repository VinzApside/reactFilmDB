import Proptypes from 'prop-types';
import React from 'react';

import { Content, Text, Wrapper } from './HeroImage.styles';

//Styles
const HeroImage = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

HeroImage.prototype = {
  image: Proptypes.string,
  title: Proptypes.string,
  text: Proptypes.string,
};

export default HeroImage;

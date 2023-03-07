import React from 'react';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Content, LogoImg, TMDBLogoImg, Wrapper } from './Header.styles';

const Header = ({ test }) => (
  <Wrapper>
    <Content>
      <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;

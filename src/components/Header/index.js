import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Content, LogoImg, TMDBLogoImg, Wrapper } from './Header.styles';

const Header = () => {
  const [user] = useContext(Context);
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        {user ? (
          <span className="loggedin">Logged in as : {user.username} </span>
        ) : (
          <Link to="/login">
            <span className="login">Log in</span>
          </Link>
        )}

        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;

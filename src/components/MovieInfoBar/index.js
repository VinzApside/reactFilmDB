import Proptypes from 'prop-types';
import React from 'react';

import { calcTime, convertMoney } from '../../helpers';
import { Content, Wrapper } from './MovieInfoBar.styles';

//Helpers
//Image

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Running time: {calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Revenue: {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

MovieInfoBar.prototype = {
  time: Proptypes.number,
  budget: Proptypes.number,
  revenue: Proptypes.number,
};

export default MovieInfoBar;

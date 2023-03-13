import React, { Component } from 'react';

import searchIcon from '../../images/search-icon.svg';
import { Content, Wrapper } from './SearchBar.styles';

class SearchBar extends Component {
  state = { value: '' };
  timeout = null;

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      const { setSearchTerm } = this.props;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const { value } = this.state;
        setSearchTerm(value);
      }, 500);
    }
  }

  render() {
    const { value } = this.state;
    return (
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search-icon"></img>
          <input type="text" placeholder="Search movie" value={value} onChange={(event) => this.setState({ value: event.currentTarget.value })} />
        </Content>
      </Wrapper>
    );
  }
}

export default SearchBar;

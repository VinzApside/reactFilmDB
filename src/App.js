import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import { GlobalStyle } from './GlobalStyle';

//routing
//Components
//Styles
//Styles
const App = () => (
  <Router className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>

    <GlobalStyle />
  </Router>
);

export default App;

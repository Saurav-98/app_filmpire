import React from 'react';
import './App.css';

// Mui
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { NavBar, Profile, Actors, MovieInformation, Movies } from './';

const App = () => {
  return (
    <div className="root">
      <CssBaseline />
      <NavBar />
      <main className="content">
        <div className="toolbar" />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

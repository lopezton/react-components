import React from 'react';
import './App.css';
import AppMenu from './AppMenu';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>
      <AppMenu />
      <hr />
      <AppRouter />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import AppRouter from './Router';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nutrition App</h1>
      </header>
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;

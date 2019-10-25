import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import routes from './routes.js';
import Header from './Components/Header/Header';

function App() {
  return (
    <HashRouter>
      <nav>
        <Header/>
      </nav>
      <main>
        {routes}
      </main>
    </HashRouter>
  );
}

export default App;

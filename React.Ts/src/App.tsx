import React from 'react';
import './App.css';
import 'notyf/notyf.min.css';
import Header from './Components/Representational/Header/Header';
import Routing from './Components/Representational/Routing/Routing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body className="App-body">
        <Routing/>
      </body>
    </div>
  );
}

export default App;

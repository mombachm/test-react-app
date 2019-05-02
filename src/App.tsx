import React from 'react';
import './App.css';
import { Title } from './components/Title';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Title/>
        </p>
      </header>
    </div>
  );
}

export default App;

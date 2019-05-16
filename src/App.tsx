import React, { Component } from 'react';
import './App.css';
import { Title } from './components/Title';
import { Provider } from 'react-redux';
import mainStore, { MainStore } from './store/Store';
import { Button } from './components/Button';
import { render } from 'react-dom';


class App extends Component<{}, MainStore> {
  readonly state: MainStore = mainStore.getState();

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <Provider store={mainStore}>
              <Title title={this.state.title}/>
              <Button title={this.state.title}/>
            </Provider>
          </p>
        </header>
      </div>
    )
  }
}

export default App;

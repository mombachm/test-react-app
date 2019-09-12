import React, { Component } from 'react';
import { Title } from './components/Title';
import { Provider } from 'react-redux';
import mainStore, { MainStore } from './store/Store';
import { Button } from './components/Button';
import { render } from 'react-dom';


class App extends Component<{}, MainStore> {
  readonly state: MainStore = mainStore.getState();

  render() {
    return (
      <div>
        <header>
          <p>
            <Provider store={mainStore}>
              <Title/>
            </Provider>
          </p>
        </header>
      </div>
    )
  }
}

export default App;

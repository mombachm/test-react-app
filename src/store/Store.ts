import { createStore } from 'redux';

export interface MainStore {
  title: string
}

function reducer(): MainStore {
  return {
    title: "Test Title"
  }
};

const mainStore = createStore(reducer);
export default mainStore;
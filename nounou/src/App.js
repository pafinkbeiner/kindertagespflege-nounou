import React from 'react';

import { createStore, StoreProvider } from 'easy-peasy';

//Easy-Peasy
import model from '../src/model';

//CSS
import '../src/App.scss'

//Components
import Layout from '../src/components/Layout/Layout'

const store = createStore(model);

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <Layout/>
      </StoreProvider>
    </div>
  );
}

export default App;

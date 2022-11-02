import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import Router from './src/navigation/Router';
import {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

// <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;

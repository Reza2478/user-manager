import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from '@/Module/Core/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>,
);


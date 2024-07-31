import '@assets/styles/main.css';

import { CoreLayout, CoreProvider } from '@core';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoreProvider>
      <CoreLayout>App</CoreLayout>
    </CoreProvider>
  </React.StrictMode>,
);

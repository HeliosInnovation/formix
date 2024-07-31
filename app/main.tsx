import '@assets/styles/main.css';

import { CoreLayout, CoreProvider } from '@core';
import { Button } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoreProvider>
      <CoreLayout>
        <Button>button</Button>
      </CoreLayout>
    </CoreProvider>
  </React.StrictMode>,
);

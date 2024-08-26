import React from 'react';
import { createRoot } from 'react-dom/client';
import MainApp from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<MainApp />);

serviceWorker.unregister();

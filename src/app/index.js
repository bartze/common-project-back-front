import React from 'react';
import { createRoot } from 'react-dom/client';
import RootLayout from './dashboard/layout';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<RootLayout />);
serviceWorker.unregister();

//import MainApp from './App';
// root.render(<MainApp />);

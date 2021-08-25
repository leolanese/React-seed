import { render } from 'react-dom';
import React, { StrictMode } from "react";

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
// activating StrictMode to help highlighting potential problems in the application
serviceWorker.unregister();

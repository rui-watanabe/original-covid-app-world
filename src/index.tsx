import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as H from 'history';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './app/store';

declare global {
  interface Window {
    renderWorld: (containerId: string, history: H.History) => void;
    unmountWorld: (containerId: string) => void;
  }
}

window.renderWorld = (containerId, history) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </React.StrictMode>,
    document.getElementById(containerId)
  );

  serviceWorker.unregister();
};

window.unmountWorld = (containerId) => {
  ReactDOM.unmountComponentAtNode(
    document.getElementById(containerId) as HTMLElement
  );
};
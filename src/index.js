import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducers/postReducer';
import commentReducer from './reducers/commentReducer';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({postReducer, commentReducer});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render( 
  <Provider 
    store={store}
  ><App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './views/templates/containers/App';
import * as serviceWorker from './serviceWorker';
import reducers from './store/reducers';
import { Helmet } from 'react-helmet'


const store = createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

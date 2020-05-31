import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, useSelector } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'

import { getFirebase, ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument( { getFirebase, getFirestore } )),
        reduxFirestore(fbConfig)
    ));

    const rrfProps = {
    firebase: fbConfig,
    config: {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true},
    dispatch: store.dispatch,
    createFirestoreInstance
}

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) {
        return (
            <div className="progress topMargin red darken-4">
              <div className="indeterminate"></div>
            </div>
        )    
    }
    return children
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded><App /> </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root')
);
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA




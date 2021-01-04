import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.css';
import {createStore, applyMiddleware, compose} from 'redux'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import rootReducer from '../src/Store/Reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore  } from 'redux-firestore'
import { reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'




//connecting to firebase 
const Store = createStore(rootReducer,
    compose(applyMiddleware(thunk.withExtraArgument({ getFirebase ,getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile:true , userProfile : 'users',attachAuthIsReady : true})
    ) 
   
);


 //making sure firebase auth is loaded before App.js
Store.firebaseAuthIsReady.then(() => {
ReactDOM.render(<Provider store ={Store}><App /></Provider>,document.getElementById('root'));
serviceWorker.register(); 
}).catch((err)=>{console.log(err)})

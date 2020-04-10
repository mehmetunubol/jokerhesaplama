import authReducer from './authReducer'
import calculationReducer from './calculationReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import localCalcReducer from './localCalcReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  calculation: calculationReducer,
  localcalc: localCalcReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer

// the key name will be the data property on the state object
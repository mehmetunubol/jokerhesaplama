export const addCalculation = (calculation) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const userId = (getState().firebase.auth.isEmpty)? "L44oBLfuJYdwUSsBxscu3Zr4UqF2" : getState().firebase.auth.uid;
    firestore.collection('calculations').add({
      userId,
      ...calculation,
      createdAt: new Date()
    }).then( () => {
      dispatch({ type: 'ADD_CALCULATION', calculation });
    }).catch( (err) => {
      dispatch({ type: 'ERROR_ADD_CALCULATION', err });
    })
  }
};
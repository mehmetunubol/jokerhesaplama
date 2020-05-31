const initState = {
    datas: []
  }
  
  const localCalcReducer = (state = initState, action) => {
    switch (action.type) {
      case 'ADD_CALC':
        return {
          calculations: action.calculations,
          ratio: action.ratio
        };
      default:
        return state;
    }
  };
  
  export default localCalcReducer;
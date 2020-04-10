const initState = {
  calculations: [ ]
}

const calculationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CALCULATION':
      let calculations = state.calculations;
      calculations.push(action.calculation);
      return {
        calculations
      };
    case 'ERROR_ADD_CALCULATION':
      console.log(action.type);
      return state;
    default:
      return state;
  }
};

export default calculationReducer;
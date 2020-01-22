import * as types from '../actions/ActionTypes'


const initialState = {
  curQ: 0
};


function reducer(state = initialState, action) {
    switch (action.type) {
        case types.NEXT:
            return {
                ...state,
                next: state.curQ += 1
            };
        default:
            return state;
    }
}

export default reducer;

import * as actionTypes from '../actions';

const initialState = {
    modal: null,
    data: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN:
            return {
                ...state,
                modal: true
            }  
        case actionTypes.OPEN_CONFRIM:
            return {
                ...state,
                modal: true,
                data: action.data
            }  
        case actionTypes.CLOSE:
            return {
                ...state,
                modal: false
            }
        default:
            return {
                state
            }     
    }
}

export default reducer;
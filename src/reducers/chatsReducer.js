import ActionTypes from '../actions/ActionTypes';

const initialState = {
    airportList : [],
    airportCodeToCityMap: {}
}

export function chatsReducer(state = initialState, action = {}) {
    const payload = action.payload;
    switch (action.type) {
        case ActionTypes.GET_CHATS_LIST:
            return {...state,  airportList: payload};
        default:
            return state;
    }
};

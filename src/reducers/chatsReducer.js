import ActionTypes from '../actions/ActionTypes';

const initialState = {
}

export function chatsReducer(state = initialState, action = {}) {
    const payload = action.payload;
    switch (action.type) {
        case ActionTypes.GET_CHATS_LIST:
            return {...state,  chatList: payload};
        case ActionTypes.SET_CHAT_HISTORY:
            let chatByName = state.chatList[payload.name];
            const clone = {...chatByName, history: payload.history};
            state.chatList[payload.name] = clone;
            const chatList = {...state.chatList};
            return {...state, chatList};
        case ActionTypes.SET_CURRENT_CHAT:
            return {...state, currentChat: payload.name}
        default:
            return state;
    }
};

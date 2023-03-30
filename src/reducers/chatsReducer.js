import ActionTypes from '../actions/ActionTypes';

const initialState = {
    chats : {}
}

export function chatsReducer(state = initialState, action = {}) {
    const payload = action.payload;
    switch (action.type) {
        case ActionTypes.GET_CHATS_LIST:
            return {...state,  chatList: payload};
        case ActionTypes.SET_CHAT_HISTORY:
            let chatByName = state.chatList[payload.name];
            const clone = {...chatByName, history: payload.history};
            const chatList = {...state.chatList, clone};
            return {...state, chatList};
        case ActionTypes.SET_CURRENT_CHAT:
            return {...state, currentChat: payload.name}
        default:
            return state;
    }
};

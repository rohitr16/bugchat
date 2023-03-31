import axios from 'axios';
import ActionTypes from './ActionTypes'


export const getChats = ({queryParams}) => async dispatch => {

    const url = '/chats';
    try {
        const res = await axios.get(url, {params: queryParams});

        const formattedRes = {};

        res.data.forEach((item) => {
            const clone = {...item};
            formattedRes[clone.name] = clone; 
        });
        
        dispatch({ type: ActionTypes.GET_CHATS_LIST, payload: formattedRes });

        return formattedRes;
    }  catch(e) {
        console.log(e);
    }
};

export const setChatHistory = (name, history) => async dispatch => {
    dispatch({type: ActionTypes.SET_CHAT_HISTORY, payload: {name, history}});
    
}

export const setCurrentChat = (name) => async dispatch => {
    dispatch({type: ActionTypes.SET_CURRENT_CHAT, payload: {name}})
}





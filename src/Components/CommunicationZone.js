import React, { useEffect } from 'react';
import { connect } from "react-redux";
import '../App.css';
import ChatZone from './ChatZone';
import ContactWindow from './ContactWindow';
import InputZone from '../InputZone';
import {dialogueEngine} from '../Utility/util';
import * as actions from "../actions";

const CommunicationZone = (props) => {

  const {currentChat, chatList = {}, setCurrentChat, getChats} = props;

  const [state, setState] = React.useState({
    value: '',
    disposable: '',
    history: [{bot:'How can I help?'}],
    name: ''
  });
  const stateRef = React.useRef(state);

  useEffect( () =>  {
    async function fetchD(){
      const res = await getChats({});
      const {history, name} = res[Object.keys(res)[0]];
      setState((state) => {
        return {...state, history, name};
      });
      setCurrentChat(name);
    }
    fetchD();
  },[getChats, setCurrentChat]);

  useEffect(() => {
    const {history} = chatList[currentChat] || {};
    if (history) {
      setState((state) => {
        return {
          ...state,
          history,
          name: currentChat
        }
      })
    }
  },[currentChat, chatList])

  function handleChange(event) {
    setState({
      ...state,
      value: event.target.value,
    });
  }

  function handleSubmit(event) {
    if (event.key === 'Enter' && event.target.value) {
      const newState = {
        ...state,
        value: '',
        disposable: event.target.value,
        history: [...state.history, {person:event.target.value}],
      };
      setState(newState);
      stateRef.current = newState;
      setTimeout(() =>  {
       const response =  dialogueEngine(stateRef);
       const history = [...stateRef.current.history, {bot:response}];
       setState({
         ...stateRef.current,
         history
       });
       props.setChatHistory(stateRef.current.name, history);
      }, 1000);
    }
    cleanHistory();
  }

  function cleanHistory() {
    const tempHistory = state.history;
    let newHistory = [];
    if (state.history.length > 12) {
      tempHistory.shift();
      tempHistory.shift();
      newHistory = tempHistory;
      setState({
        ...state,
        history: newHistory,
      });
    }
  }

  return (
    <div className="chatHost innerShadow">
      <ContactWindow />
      <ChatZone chatItem={state.history} />
      <InputZone
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={state.value}
      />
    </div>
  );
};

const mapStateToProps = ({ chats = {} }) => {
  return {
    chatList: chats.chatList,
    currentChat: chats.currentChat
  };
};

export default connect(mapStateToProps, actions)(CommunicationZone);

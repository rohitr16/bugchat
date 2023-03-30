import React, { useEffect } from 'react';
import { connect } from "react-redux";
import '../App.css';
import ChatZone from './ChatZone';
import ContactWindow from './ContactWindow';
import InputZone from '../InputZone';
import {dialogueEngine} from '../Utility/util';
import * as actions from "../actions";

const CommunicationZone = (props) => {

  const [state, setState] = React.useState({
    value: '',
    disposable: '',
    history: ['How can I help?'],
    name: ''
  });
  const stateRef = React.useRef(state);

  useEffect( () =>  {
    const {getChats} = props;

    async function fetchD(){
      const res = await getChats({});
      const {history, name} = res[Object.keys(res)[0]];
      setState((state) => {
        return {...state, history, name};
      })
    }
    fetchD();
  },[]);

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
        history: [...state.history, event.target.value],
      };
      setState(newState);
      stateRef.current = newState;
      props.setChatHistory(newState.name, newState.history);
      setTimeout(() => dialogueEngine(stateRef, setState), 3000);
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
    chats
  };
};

export default connect(mapStateToProps, actions)(CommunicationZone);

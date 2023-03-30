import React from 'react';
import '../App.css';
import ChatZone from './ChatZone';
import ContactWindow from './ContactWindow';
import InputZone from '../InputZone';
import {dialogueEngine} from '../Utility/util';

const CommunicationZone = () => {
  const [state, setState] = React.useState({
    value: '',
    disposable: '',
    history: ['How can I help?'],
  });
  const stateRef = React.useRef(state);

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

export default CommunicationZone;

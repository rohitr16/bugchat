import React from 'react';
import './App.css';
import ChatList from './Components/ChatList';
import CommunicationZone from './Components/CommunicationZone';

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <ChatList />
        <CommunicationZone />
      </div>
    </div>
  );
}

export default App;

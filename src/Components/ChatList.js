import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

function ChatList(props) {
  const { chatList = {}, setCurrentChat } = props;

  const handleClick =  (event) => {
    setCurrentChat(event.target.textContent);
  }

  const renderList = () => {
    return Object.keys(chatList).map((item) => {
        const data = chatList[item]
      return (
        <li key={data.uuid} onClick={ (event) => handleClick(event)} > 
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
            alt=""
          />
          <div>
            <h2>{data.name}</h2>
            <h3>
              <span className="status green"></span>
              online
            </h3>
          </div>
        </li>
      );
    });
  };
  return (
    <aside>
      <header>
        <input type="text" placeholder="search" />
      </header>
      <ul>{renderList()}</ul>
    </aside>
  );
}

const mapStateToProps = ({ chats = {} }) => {
  return {
    chatList: chats.chatList
  };
};

export default connect(mapStateToProps, actions)(ChatList);

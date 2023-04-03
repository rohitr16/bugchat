import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

function ChatList(props) {
  const { chatList = {}, setCurrentChat, currentChat } = props;

  const handleClick =  (data) => {
    setCurrentChat(data.name);
  }

  const renderList = () => {
    return Object.keys(chatList).map((item) => {
        const data = chatList[item];
        const className = (currentChat === data.name) ? 'selected': '';

      return (
        <li key={data.uuid} onClick={ () => handleClick(data)} className={className} > 
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
    chatList: chats.chatList,
    currentChat: chats.currentChat
  };
};

export default connect(mapStateToProps, actions)(ChatList);

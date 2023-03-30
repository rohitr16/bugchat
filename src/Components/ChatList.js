import React from 'react';

export default function (props) {
  return (
      <aside>
        <header>
          <input type="text" placeholder="search" />
        </header>
        <ul>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status orange"></span>
                offline
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status green"></span>
                online
              </h3>
            </div>
          </li>
        </ul>
      </aside>
  );
}

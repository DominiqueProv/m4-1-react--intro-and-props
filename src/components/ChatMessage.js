import React from 'react';
import './ChatMessage.css';

function ChatMessage({ user, body, messageType }) {
    if (messageType === 'sent') {
        return (
            <div className="chat-message">
                <div className="avatar-container">
                    {/* <img className="userAvatar" src={user.avatar} alt="avatar" /> */}
                </div>
                <div className="tip-place">
                <img className="tip" src="./assets/tip-sent.svg" />
                </div>
                <div className="user-content">
                    <div className="user-name">
                        {user.username}
                    </div>
                    <div className="user-chat">{body}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="chat-message-other">

                <div className="user-content-other">
                    <div className="container-flex">
                    <div className="user-name">
                        {user.username}
                    </div>
                    <div className="other-chat">{body}
                    </div>
                    </div>
                    <div className="other-container">
                        <img className="other-tip" src="./assets/tip-received.svg" />
                        <div className="avatar-container-other">
                            <img className="userAvatar" src={user.avatar} alt="avatar" />
                        </div>

                    </div>
                    
                </div>
            </div>
        );
    }
}


export default ChatMessage;


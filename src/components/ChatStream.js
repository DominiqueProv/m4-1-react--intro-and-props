import React from 'react';

import './ChatStream.css';
import ChatMessage from './ChatMessage';



function ChatStream({messages, currentUser}) {
    return (
        <section className="chat-stream">
            {messages.map(message => {
                let messageType;
                if (message.user === currentUser) {
                    messageType = 'sent';
                } else {
                    messageType = 'received';
                }
                return (
                    <ChatMessage
                        user={message.user}
                        body={message.body}
                        messageType={messageType}
                    />
                );
            })}
        </section>

    );

    //   return <section className="chat-stream">{/* Your code here! */}</section>;
}

export default ChatStream;

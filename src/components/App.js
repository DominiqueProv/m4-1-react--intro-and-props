import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

function App({ currentUser, conversation,}) {
    // console.log(users.elaine.avatar)
    return (
        <div className="wrapper">
            <Header className="header"
                currentUser={currentUser}
                participants={conversation.participants}
            />
            <ChatStream
                currentUser={currentUser}
                messages={conversation.messages}
            />
            <Footer />
        </div>
    );
}

export default App;

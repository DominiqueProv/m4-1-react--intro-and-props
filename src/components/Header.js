import React from "react";
import Avatars from "./Avatars";

import "./Header.css";

function Header({ currentUser, participants }) {
    return (
        <header className="participant">
            {participants.filter(participant => participant !== currentUser).map(participant =>(
                <div className="participant-container">
                    <Avatars userProfil={participant} />
                    <div className="name-profile">{participant.username}</div>
                </div>
            ))}
        </header>
    );
}

export default Header;

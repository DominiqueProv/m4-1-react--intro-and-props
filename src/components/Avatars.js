import React from "react";

import './Avatars.css';



const Avatars = ({userProfil}) => {
    return(
       <img className="picParticipant"
         src={userProfil.avatar}
        />
    );
}

export default Avatars
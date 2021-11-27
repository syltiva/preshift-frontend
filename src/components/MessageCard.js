import React from "react";



function MessageCard(props) {
  const { message } = props
  return (
    <div>
       <h2>Hi User!</h2>
        {messages.map(message => (
        <div className="MessageCard">
        <h4>Date: {message.date}</h4>
        <p>Covers: {message.covers}</p>
        <p>86s: {message.eightySix}</p>
        <p>Service Notes: {message.serviceNote}</p>
        <p>Food&Bev Updates: {message.foodBev}</p>
        <p>Misc: {message.misc}</p>
        </div>
        ))};
    </div>
  );
};

export default MessageCard;

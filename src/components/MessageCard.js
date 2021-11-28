import React from "react";
import "./MessageCard.css"



function MessageCard(props) {
  const { message } = props
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-m-12">
          <div key={message._id} className="message-card"><br/><br/> 
          <h4 style={{
            textAlign: "right"
          }}><b>Date: </b>{message.date}</h4>
          <p><b>Covers: </b>{message.covers}<br/>
          <b>86s: </b>{message.eightySix}<br/>
          <b>Service Notes: </b>{message.serviceNote}<br/>
          <b>Food&Bev Updates: </b>{message.foodBev}<br/>
          <b>Misc:  </b>{message.misc}</p>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default MessageCard; 

import React from "react";
import { Link } from "react-router-dom";
import "./MessageCard.css"

const defaultImage =
  "https://www.creativefabrica.com/wp-content/uploads/2019/08/Restaurant-Logo-by-Koko-Store-580x386.jpg"

function MessageCard(props) {
  const { message } = props


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-m-12">
          <div key={message._id} className="message-card"><br/><br/> 
          <div className="messageImage">
          <img style={{
            width: "40vw"
          }}
            src={message.image ? message.image : defaultImage}
            alt="preshift image"/>
          </div>
          <br/>
          
          <h4 style={{
            textAlign: "right"
          }}>
          <b>Date: </b>{message.date}</h4>
          <p><b>Covers: </b>{message.covers}<br/>
          <b>86s: </b>{message.eightySix}<br/>
          <b>Service Notes: </b>{message.serviceNote}<br/>
          <b>Food&Bev Updates: </b>{message.foodBev}<br/>
          <b>Misc:  </b>{message.misc}</p>
          <Link to={`/editpreshift/${message._id}`} className="btn btn-primary" > Edit</Link>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default MessageCard; 

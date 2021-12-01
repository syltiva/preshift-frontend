import React from "react";
import { Link } from "react-router-dom";
import "./MessageCard.css"
import {useParams} from "react-router"
import { isAuthenticated } from "../services/authService";

const defaultImage =
  "https://www.creativefabrica.com/wp-content/uploads/2019/08/Restaurant-Logo-by-Koko-Store-580x386.jpg"

function MessageCard(props) { 
  const { message } = props
  const {id} = useParams();
  const user = isAuthenticated();


  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-m-12">
          <div key={message._id} className="message-card"><br/><br/> 
          <h4 style={{
            textAlign: "right",
            alignSelf: "flex-end",
            paddingRight: "3.2rem"

          }}>
          <b>{message.date}</b></h4><br/>
          <div className="messageImage">
          <img style={{
            width: "40vw"
          }}
            src={message.image ? message.image : defaultImage}
            alt="preshift image"/>
          </div>
          <br/>
          <div className="card-content">
          <p><b>COVERS: </b>{message.covers}<br/>
          <b>86s: </b><br/>{message.eightySix}<br/>
          <b>SERVICE: </b><br/>{message.serviceNote}<br/>
          <b>FOOD&BEV: </b><br/>{message.foodBev}<br/>
          <b>MISC:  </b><br/>{message.misc}</p>
          <div style={{textAlign: "right"}}>
          {user.role === "ADMIN" && (
            <Link to={`/editpreshift/${message._id}`} className="btn btn-outline-dark" >
            edit
            </Link>
          )}
          </div>
          </div>
          </div>
        </div>
      </div>   
    </div>
    </>
  );
};

export default MessageCard; 

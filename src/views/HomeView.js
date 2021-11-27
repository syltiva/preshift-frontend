import { useState, useEffect } from "react";
import axios from "axios"
// import MessageCard from '../components/MessageCard'

const HomeView = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getMessages();
    }, [])

    async function getMessages() {
      const response = await axios.get("http://localhost:4200/api/v1/messages")
      console.log("response", response);
      setMessages(response.data)
      }

      return (
      <div>
       <h2>Hi, User!</h2>
        {messages.map(message => (
        <div key={message._id}>
        <h4>Date: {message.date}</h4>
        <p>Covers: {message.covers}</p>
        <p>86s: {message.eightySix}</p>
        <p>Service Notes: {message.serviceNote}</p>
        <p>Food&Bev Updates: {message.foodBev}</p>
        <p>Misc: {message.misc}</p>
        </div>
        ))};
      </div>
  )
};

export default HomeView;

import { useState, useEffect } from "react";
import axios from "axios"
import MessageCard from '../components/MessageCard'

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
      <p><br/><br/>
       <h2>Hi, User!</h2></p>
        {messages.map(message => (
        <MessageCard key={message._id} message={message} />
        ))};  
      </div>
  )
};

export default HomeView;

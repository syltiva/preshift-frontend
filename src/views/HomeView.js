import { useState, useEffect } from "react";
import axios from "axios"
import MessageCard from '../components/MessageCard'
import AddMessage from "./AddMessageView";

const defaultImage =
"https://www.creativefabrica.com/wp-content/uploads/2019/08/Restaurant-Logo-by-Koko-Store-580x386.jpg"

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
      <>
      <div>
      <br/><br/>
       <h2>Hi, User!</h2>
        {messages.map(message => (
        <MessageCard key={message._id} message={message} />
        ))}  
      </div>
      </>
  );
}

export default HomeView;

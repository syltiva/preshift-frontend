import { useState, useEffect } from "react";
import axios from "axios"
import MessageCard from '../components/MessageCard'
import { isAuthenticated } from "../services/authService";
import './HomeView.css'

const defaultImage =
"https://www.creativefabrica.com/wp-content/uploads/2019/08/Restaurant-Logo-by-Koko-Store-580x386.jpg"

const HomeView = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const user = isAuthenticated()
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getMessages();  
    }, [])

    async function getMessages() {
      const response = await axios.get(`${apiUrl}/messages`)
      console.log("response", response);
      setMessages(response.data)
      }

      return (
      <>
      <div className="background">
      <br/><br/>
       <h4 style={{
         color: "white",
         border: "gray 1px",
         textShadow: "0 2px 2px black",

         
       }}>Hello, {user.name}!</h4>
        {messages.map(message => (
        <MessageCard key={message._id} message={message} />
        ))}  
      </div>
      </>
  );
};

export default HomeView;

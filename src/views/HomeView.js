import { useState, useEffect } from "react";
import MessageCard from "../components/MessageCard";

const HomeView = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    const response = await getAllMessages();
    setMessages(response.data);
  };

  return (
    <div className="container mt-5">
      <h2>Home View</h2>
      <div className="container">
        {board.length === 0 && <h3>no new preshifts notes!</h3>}
        <div className="row messageCards">
          {messages.map((message) => (
            <div key={message._id} className="messageBox row-12">
              <MessageCard obj={message} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;

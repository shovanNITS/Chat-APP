import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="flex flex-col h-screen bg-gray-50">
      {/* Chat Header */}
      <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">Chat Room</h1>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-100">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <span ref={scroll}></span>
      </div>

      {/* Input Area */}
      <footer className="bg-white shadow px-6 py-4">
        <SendMessage scroll={scroll} />
      </footer>
    </main>
  );
};

export default ChatBox;

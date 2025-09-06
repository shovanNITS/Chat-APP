import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  const isUserMessage = message.uid === user?.uid;

  return (
    <div
      className={`flex items-end gap-2 ${
        isUserMessage ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar (only for others, to reduce clutter for self) */}
      {!isUserMessage && (
        <img
          src={message.avatar}
          alt="user avatar"
          className="w-8 h-8 rounded-full"
        />
      )}

      {/* Bubble */}
      <div
        className={`max-w-xs px-4 py-2 rounded-2xl shadow-sm text-sm ${
          isUserMessage
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
      >
        {!isUserMessage && (
          <p className="text-xs font-semibold text-gray-600 mb-1">
            {message.name}
          </p>
        )}
        <p>{message.text}</p>
      </div>

      {/* Avatar for self (on right) */}
      {isUserMessage && (
        <img
          src={message.avatar}
          alt="user avatar"
          className="w-8 h-8 rounded-full"
        />
      )}
    </div>
  );
};

export default Message;

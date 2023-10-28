import React from "react";
import { GrAttachment } from "react-icons/gr";
import { RiSearchLine } from "react-icons/ri";

function Chat() {
  return (
    <div className="flex-1 bg-gray-100 flex">
      <div className="w-2/4 bg-white p-5 border-r border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full border rounded-full px-4 py-2 pl-10"
          />
          <RiSearchLine className="absolute top-1/2 transform -translate-y-1/2 text-gray-500 left-3" />
        </div>
        {/* Contact List */}
        {/* Add your contact list content here */}
      </div>

      <div className="w-3/4 p-5">
        
        {/* Chat History */}
        {/* <h2 className="text-2xl font-bold mb-4">Chat</h2> */}
        <div className="p-4 bg-white rounded-full">
          <div className="flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full border rounded-full px-4 py-2 pl-10"
              />
              <GrAttachment className="absolute top-1/2 transform -translate-y-1/2 text-gray-500 right-3" />
            </div>
            <button className="bg-green-700 text-white px-4 py-2 rounded-full ml-2">
              Send
            </button>
          </div>
        </div>
 
        {/* Add your chat history content here */}
      </div>
      <div className="w-1/4">{/* add any profile detials if needed */}</div>
    </div>
  );
}

export default Chat;

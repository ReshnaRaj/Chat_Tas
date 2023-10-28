import React from "react";
import { FaUsers } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiSolidReport } from "react-icons/bi";
import { MdEmojiTransportation, MdSettingsPhone } from "react-icons/md";
 
import {
  BsFillChatLeftDotsFill,
  BsFillJournalBookmarkFill,
} from "react-icons/bs";
import Chat from "./Chat";

function App() {
  return (
    <div className="flex lg:flex-row h-screen">
      <div className="w-16 lg:w-40 bg-green-700 text-white">
        <div className="p-4 flex items-center">
          <img
            className="w-14"
            src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1692330914/goal_wmfh8s.png"
            alt="icon"
          />
          <span className="text-yellow-400 ml-2 font-semibold hidden lg:block">
            LEAD
          </span>
        </div>

        <div className="p-3 space-y-10">
          <li className="flex items-center">
            <BiSolidReport className="text-4xl" />
            <span className="lg:ml-2 font-bold hidden lg:block">
              Appointments
            </span>
          </li>
          <li className="flex items-center">
            <FaUsers className="text-xl" />
            <span className="lg:ml-2 font-bold hidden lg:block">Clients</span>
          </li>
          <li className="flex items-center">
            <MdEmojiTransportation className="text-xl" />
            <span className="lg:ml-2 font-bold hidden lg:block">Services</span>
          </li>
          <li className="flex items-center">
            <BsFillChatLeftDotsFill />
            <span className="lg:ml-2 font-bold hidden lg:block">Chat</span>
          </li>
          <li className="flex items-center">
            <BsFillJournalBookmarkFill />
            <span className="lg:ml-2 font-bold hidden lg:block">Reports</span>
          </li>
          <li className="flex items-center">
            <MdSettingsPhone className="text-xl" />
            <span className="lg:ml-2 font-bold hidden lg:block">Help</span>
          </li>
          <li className="flex items-center">
            <FiSettings />
            <span className="lg:ml-2 font-bold hidden lg:block">Settings</span>
          </li>
        </div>
      </div>
   <Chat/>
    </div>
  );
}

export default App;

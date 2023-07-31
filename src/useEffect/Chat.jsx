import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";

const Chat = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <div className="flex items-baseline">
            <label className="mb-6 mr-6">Choose your chat room:</label>
            <select
              className="border-2 p-2 rounded border-blue-300 focus:outline-none"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            >
              <option className="mr-" value="General">
                General
              </option>
              <option value="Naruto">Naruto</option>
              <option value="One Piece">One Piece</option>
            </select>
          </div>

          <button
            className={`block mx-auto px-3 py-2 border-2 ${show ? "border-red-400 bg-red-300" : "border-green-400 bg-green-300"}  rounded mb-6`}
            onClick={() => setShow(!show)}
          >
            {show ? "Leave Chat" : "Join Chat"}
          </button>
          {show && <ChatRoom roomId={roomId} />}
        </div>
        <div>
          <Link
            to={`https://github.com/UnionPAC/learn-react-hooks/tree/main/src/${currentDirectory}/${currentFileName}.jsx`}
            target="_blank"
            className="text-sm px-6 py-3 rounded border-2 text-slate-700"
          >
            <code>View Code</code>
          </Link>
        </div>
      </div>
    </>
  );
};

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <label className="font-semibold">Server URL: </label>
      <input
        className=" ml-3 italic cursor-pointer"
        value={serverUrl}
        onChange={(e) => setServerUrl(e.target.value)}
      />
      <h1 className="mt-4 text-2xl" >Welcome to the {roomId} room! 🥳</h1>
    </>
  );
}

function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}

export default Chat;

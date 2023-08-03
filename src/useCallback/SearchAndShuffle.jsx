import { useState, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";
import shuffle from "../utils/shuffle";

/*
NOTE
---------
While this is a small example and there are no performance issues really that are encountered. If this happened to
do a bigger operation it could be very expensive.

PROBLEM
---------
The issue here is that the component is being re-rendered everytime we shuffle the users, but this has nothing
to do with our Search input component. So we should STOP re-rendering of the Search component unless it has a dependency change.
*/

const allUsers = ["john", "alex", "george", "simon", "james"];

const SearchAndShuffle = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text) => {
      console.log(users[0]);
      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <div className="m-4 space-x-6">
            <button
              className="px-3 py-2 bg-blue-300 border-2 border-blue-400 rounded"
              onClick={() => setUsers(shuffle(allUsers))}
            >
              Shuffle
            </button>
            <Search onChange={handleSearch} />
          </div>
          <ul>
            {users.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </ul>
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

const Search = memo(function Search({ onChange }) {
  console.log("Search Component Re-rendered!");

  return (
    <input
      className="p-2 focus:outline-none border-b-2"
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
});

export default SearchAndShuffle;

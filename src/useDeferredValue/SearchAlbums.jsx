import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";
import { Suspense, useDeferredValue, useState } from "react";
import SearchResults from "./SearchResults";

const SearchAlbums = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <label className="mr-4">Search Albums:</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-2 mb-4 focus:outline-none px-2 py-[2px] rounded"
          />
          <Suspense fallback={<h2>Loading...</h2>}>
            <SearchResults query={deferredQuery} />
          </Suspense>
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

export default SearchAlbums;

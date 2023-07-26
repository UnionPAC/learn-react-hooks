import { useState, useEffect } from "react";

const useCurrentFilePath = () => {
  const [currentDirectory, setCurrentDirectory] = useState("");
  const [currentFileName, setCurrentFileName] = useState("");

  useEffect(() => {
    // Get the current directory path from window.location
    const currentPath = window.location.pathname;
    const pathArr = currentPath.split("/");
    // console.log(pathArr);

    setCurrentDirectory(pathArr[1]);
    setCurrentFileName(pathArr[2]);
  }, []);

  return { currentDirectory, currentFileName };
};

export default useCurrentFilePath;

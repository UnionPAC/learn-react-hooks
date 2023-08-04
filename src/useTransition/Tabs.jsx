import { Link } from "react-router-dom";
import useCurrentFilePath from "../hooks/useCurrentFilePath";
import TabButton from "./components/TabButton";
import { useTransition, useState } from "react";
import AboutTab from "./components/AboutTab";
import PostsTab from "./components/PostsTab";
import ContactTab from "./components/ContactTab";

const Tabs = () => {
  const { currentDirectory, currentFileName } = useCurrentFilePath();
  const [isPending, startTransition] = useTransition();

  const [tab, setTab] = useState("about");

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <>
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          {/* EXAMPLE CODE STARTS HERE */}
          <div className="w-[400px] flex mb-2 space-x-8">
            <TabButton
              isActive={tab === "about"}
              onClick={() => selectTab("about")}
            >
              About
            </TabButton>
            <TabButton
              isActive={tab === "posts"}
              onClick={() => selectTab("posts")}
            >
              Posts (slow)
            </TabButton>
            <TabButton
              isActive={tab === "contact"}
              onClick={() => selectTab("contact")}
            >
              Contact
            </TabButton>
          </div>
          <hr className="mb-4" />
          {tab === "about" && <AboutTab />}
          {tab === "posts" && <PostsTab />}
          {tab === "contact" && <ContactTab />}
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

export default Tabs;

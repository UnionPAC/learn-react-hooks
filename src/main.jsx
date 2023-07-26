import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Counter from "./useState/Counter.jsx";
import TextField from "./useState/TextField.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "counter",
    element: <Counter />,
  },
  {
    path: "textfield",
    element: <TextField />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

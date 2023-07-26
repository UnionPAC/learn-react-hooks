import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Counter from "./useState/Counter.jsx";
import TextField from "./useState/TextField.jsx";
import Checkbox from "./useState/Checkbox.jsx";
import Form from "./useState/Form.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/useState/Counter",
    element: <Counter />,
  },
  {
    path: "/useState/TextField",
    element: <TextField />,
  },
  {
    path: "/useState/Checkbox",
    element: <Checkbox />,
  },
  {
    path: "/useState/Form",
    element: <Form />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
/* useState */
import Counter from "./useState/Counter.jsx";
import TextField from "./useState/TextField.jsx";
import Checkbox from "./useState/Checkbox.jsx";
import { Form as StateForm } from "./useState/Form.jsx";
/* useReducer */
import { Form as ReducerForm } from "./useReducer/Form.jsx";
import TodoList from "./useReducer/TodoList.jsx";
/* useContext */
import MultipleContexts from "./useContext/MultipleContexts.jsx";
import ScaleUpWithContextAndReducer from "./useContext/ScaleUpWithContextAndReducer.jsx";
import UpdateObjectViaContext from "./useContext/UpdateObjectViaContext.jsx";
import UpdateValueViaContext from "./useContext/UpdateValueViaContext.jsx";
/* useRef */
import ClickCounter from "./useRef/ClickCounter.jsx";
import Stopwatch from "./useRef/Stopwatch.jsx";
/* useImperativeHandle */
import Example1 from "./useImperativeHandle/Example1.jsx";
import Example2 from "./useImperativeHandle/Example2.jsx";
//
import ErrorPage from "./error-page.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
    element: <StateForm />,
  },
  {
    path: "/useReducer/Form",
    element: <ReducerForm />,
  },
  {
    path: "/useReducer/Form",
    element: <ReducerForm />,
  },
  {
    path: "/useReducer/TodoList",
    element: <TodoList />,
  },
  {
    path: "/useContext/MultipleContexts",
    element: <MultipleContexts />,
  },
  {
    path: "/useContext/ScaleUpWithContextAndReducer",
    element: <ScaleUpWithContextAndReducer />,
  },
  {
    path: "/useContext/UpdateObjectViaContext",
    element: <UpdateObjectViaContext />,
  },
  {
    path: "/useContext/UpdateValueViaContext",
    element: <UpdateValueViaContext />,
  },
  {
    path: "/useRef/ClickCounter",
    element: <ClickCounter />,
  },
  {
    path: "/useRef/Stopwatch",
    element: <Stopwatch />,
  },
  {
    path: "/useImperativeHandle/Example1",
    element: <Example1 />,
  },
  {
    path: "/useImperativeHandle/Example2",
    element: <Example2 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

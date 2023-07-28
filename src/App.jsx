import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen mt-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Learn React Hooks 🦄</h1>
      {/* STATE */}
      <h2 className="text-2xl font-semibold mb-4">State Hooks</h2>

      {/* USE_STATE */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useState</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to="/useState/Counter">Counter</Link>
        </li>
        <li>
          <Link to="/useState/TextField">Text Field</Link>
        </li>
        <li>
          <Link to="/useState/Checkbox">Checkbox</Link>
        </li>
        <li>
          <Link to="/useState/Form">Form</Link>
        </li>
      </ul>

      {/* USE_REDUCER */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useReducer</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to="/useReducer/Form">Form</Link>
        </li>
        <li>
          <Link to="/useReducer/TodoList">Todo List</Link>
        </li>
      </ul>

      {/* CONTEXT */}
      <h2 className="text-2xl font-semibold mb-4">Context Hooks</h2>

      {/* USE_CONTEXT */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useContext</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to="/useContext/UpdateValueViaContext">
            Updating a Value Via Context
          </Link>
        </li>
        <li>
          <Link to="/useContext/UpdateObjectViaContext">
            Updating an Object Via Context
          </Link>
        </li>
        <li>
          <Link to="/useContext/MultipleContexts">Multiple Contexts</Link>
        </li>
        <li>
          <Link to="/useContext/ScaleUpWithContextAndReducer">
            Scaling Up With Context and a Reducer
          </Link>
        </li>
      </ul>

      {/* REF */}
      <h2 className="text-2xl font-semibold mb-4">Ref Hooks</h2>
      <ul className="space-y-2 text-center mb-4">
        <li></li>
      </ul>

      {/* EFFECT */}
      <h2 className="text-2xl font-semibold mb-4">Effect Hooks</h2>
      <ul className="space-y-2 text-center mb-4">
        <li></li>
      </ul>

      {/* PERFORMANCE */}
      <h2 className="text-2xl font-semibold mb-4">Performance Hooks</h2>
      <ul className="space-y-2 text-center mb-4">
        <li></li>
      </ul>

      {/* OTHER */}
      <h2 className="text-2xl font-semibold mb-4">Other Hooks</h2>
      <ul className="space-y-2 text-center mb-4">
        <li></li>
      </ul>

      {/* CUSTOM */}
      <h2 className="text-2xl font-semibold mb-4">Custom Hooks</h2>
      <ul className="space-y-2 text-center mb-4">
        <li></li>
      </ul>
    </div>
  );
};

export default App;

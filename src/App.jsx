import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen mt-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Learn React Hooks 🦄</h1>
      <h2 className="text-xl font-semibold my-2">State Hooks</h2>
      <ul className="space-y-2 text-center">
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

      <h2 className="text-xl font-semibold my-2">Context Hooks</h2>
      <ul className="space-y-2 text-center">
        <li></li>
      </ul>

      <h2 className="text-xl font-semibold my-2">Ref Hooks</h2>
      <ul className="space-y-2 text-center">
        <li></li>
      </ul>

      <h2 className="text-xl font-semibold my-2">Effect Hooks</h2>
      <ul className="space-y-2 text-center">
        <li></li>
      </ul>

      <h2 className="text-xl font-semibold my-2">Performance Hooks</h2>
      <ul className="space-y-2 text-center">
        <li></li>
      </ul>

      <h2 className="text-xl font-semibold my-2">Other Hooks</h2>
      <ul className="space-y-2 text-center">
        <li></li>
      </ul>

      <h2 className="text-xl font-semibold my-2">Custom Hooks</h2>
      <ul className="space-y-2 text-center">
        <li></li>
      </ul>
    </div>
  );
};

export default App;

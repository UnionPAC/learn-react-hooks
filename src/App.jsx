import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen mt-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Learn React Hooks 🦄</h1>
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

      {/* USE_REF */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useRef</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to="/useRef/ClickCounter">Click Counter</Link>
        </li>
        <li>
          <Link to="/useRef/Stopwatch">Stopwatch</Link>
        </li>
      </ul>

      {/* USE_IMPERATIVE_HANDLE */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useImperativeHandle</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to="/useImperativeHandle/Example1">Custom Input</Link>
        </li>
        <li>
          <Link to="/useImperativeHandle/Example2">Confirmation Modal</Link>
        </li>
      </ul>

      {/* EFFECT */}
      <h2 className="text-2xl font-semibold mb-4">Effect Hooks</h2>
      {/* USE_EFFECT */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useEffect</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to="/useEffect/Chat">Chat</Link>
        </li>
        <li>
          <Link to="/useEffect/EventListening">Event Listening</Link>
        </li>
        <li>
          <Link to="/useEffect/IntersectionObserver">
            Intersection Observer
          </Link>
        </li>
        <li>
          <Link to="/useEffect/Modal">Modal</Link>
        </li>
        <li>
          <Link to="/useEffect/TriggerAnimation">Trigger Animation</Link>
        </li>
      </ul>
      {/* USE_LAYOUT_EFFECT */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useLayoutEffect</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to=""></Link>
        </li>
      </ul>
      {/* USE_INSERTION_EFFECT */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useInsertionEffect</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to=""></Link>
        </li>
      </ul>

      {/* PERFORMANCE */}
      <h2 className="text-2xl font-semibold mb-4">Performance Hooks</h2>
      {/* USE_MEMO */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useMemo</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to=""></Link>
        </li>
      </ul>
      {/* USE_CALLBACK */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useCallback</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to=""></Link>
        </li>
      </ul>
      {/* USE_TRANSITION*/}
      <h4 className="text-lg font-semibold mb-2">
        <code>useTransition</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to=""></Link>
        </li>
      </ul>
      {/* USE_DEFERRED_VALUE */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useDeferredValue</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to=""></Link>
        </li>
      </ul>

      {/* OTHER */}
      <h2 className="text-2xl font-semibold mb-4">Other Hooks</h2>
      {/* USE_DEBUG_VALUE */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useDebugValue</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to=""></Link>
        </li>
      </ul>
      {/* USE_ID */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useId</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to=""></Link>
        </li>
      </ul>
      {/* USE_SYNC_EXTERNAL_STORE */}
      <h4 className="text-lg font-semibold mb-2">
        <code>useSyncExternalStore</code>
      </h4>
      <ul className="space-y-2 text-center mb-4">
        <li>
          <Link to=""></Link>
        </li>
      </ul>

      {/* CUSTOM */}
      <h2 className="text-2xl font-semibold mb-4">Custom Hooks</h2>
      <div className="mb-20"></div>
    </div>
  );
};

export default App;

# Learn React Hooks

✨ I made this repository for 2 reasons:

1. To refresh myself on all of the different React Hooks and how they are used

2. As a tool to be used if I need a quick reminder of a Hook in the future

#### What are Hooks?

> Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.

*https://react.dev/reference/react*

#### Which Hooks will I be going over? 🪝

- useState
- useReducer
- useContext
- useRef
- useImperativeHandle
- useEffect
- useLayoutEffect
- useInsertionEffect
- useMemo
- useCallback
- useTransition
- useDeferredValue
- useDebugValue
- useId
- useSyncExternalStore
- Custom Hooks

### State Hooks 🧠

State lets a component “remember” information like user input.

*For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.*

#### useState

useState is a React Hook that lets you add a state variable to your component.

**Syntax**
```
const [state, setState] = useState(initialState);
```

#### useReducer

useReducer is a React Hook that lets you add a reducer to your component.

*Note: useReducer is very similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component.*

**Syntax**
```
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

**Parameters**
- `reducer`: The reducer function that specifies how the state gets updated. 
*Takes the state and action as args and should return the next state.*

- `initialArg`: The value from which the initial state is calculated.
*How the initial state is calculated, depends on the `init` arg.*

- `init`: The initializer function.

**Returns**

useReducer returns an array with exactly two values:

1. The current state
2. The `dispatch` function that lets you update the state to a different value and trigger a re-render

**wtf is a reducer?**
Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can consolidate all the state update logic outside your component in a single function, called a reducer.

👉 Reducers are a different way to handle state. You can migrate from useState to useReducer in three steps:

1. Move from setting state to dispatching actions.
2. Write a reducer function.
3. Use the reducer from your component.

---

### Context Hooks 🏗️

Context lets a component receive information from distant parents without passing it as props.

*For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.*

#### useContext

---

### Ref Hooks 🍎

Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.

#### useRef

#### useImperativeHandle

---

### Effect Hooks ✨

Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

#### useEffect

#### useLayoutEffect

#### useInsertionEffect

---

### Performance Hooks 🏎️

A common way to optimize re-rendering performance is to skip unnecessary work.

*For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.*

#### useMemo

#### useCallback

#### useTransition

#### useDeferredValue

---

### Other Hooks 🪝

These Hooks are mostly useful to library authors and aren’t commonly used in the application code.

#### useDebugValue

#### useId

#### useSyncExternalStore

---

### Custom Hooks 👑

https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component

---

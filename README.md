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

_For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index._

#### useState

`useState` is a React Hook that lets you add a state variable to your component.

**Syntax**

```
const [state, setState] = useState(initialState);
```

#### useReducer

`useReducer` is a React Hook that lets you add a reducer to your component.

_Note: useReducer is very similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component._

**Syntax**

```
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

**Parameters**

- `reducer`: The reducer function that specifies how the state gets updated.
  _Takes the state and action as args and should return the next state._

- `initialArg`: The value from which the initial state is calculated.
  _How the initial state is calculated, depends on the `init` arg._

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

_For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep._

#### useContext

`useContext` is a React Hook that lets you read and subscribe to context from your component.

**Syntax**

```
const value = useContext(SomeContext)
```

**Parameters**

- `someContext`: The context that you've previously created with `createContext`

**Returns**
`useContext` returns the context value for the calling component. It is determined as the value passed to the closest `SomeContext.Provider` above the calling component in the tree.

---

### Using Reducer and Context to Scale Up 🚀

**Reducers** let you consolidate a component's state update logic.
**Context** lets you pass information deep down to other components.

> _You can combine reducers and context together to manage complex state_

A reducer helps keep the event handlers short and concise. However, as your app grows its hard to to manage component access to state and dispatch.

Solution: Put both the `state` and `dispatch` into context.
This way, any component below & in the tree can read the state and dispatch actions without _prop-drilling_.

**How to combine a reducer with context:**

1. Create the context
2. Put state and dispatch into context
3. Use context anywhere in the tree

_Note: You can further declutter the components by moving all wiring into one file_

---

### Ref Hooks 🍎

Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.

#### useRef

`useRef` is a React Hook that lets you reference a value that's not needed for rendering.

**Syntax**

```
const ref = useRef(initialValue)
```

**Parameters**

- `initialValue`: The value you want the ref object's `current` property to be initially. It can be a value of any type.

**Returns**

`useRef` returns an object with a single property.

- `current`: Initially, it's set to the `initialValue` you have passed. You are able to set it to something else later.

> _refs are perfect for storing information that doesn’t affect the visual output of your component_

By using a ref, you make sure that ...

- you can store info between re-renders
- changing it does **NOT** trigger a re-render
- the info is local to each copy of your component

##### Wait .. what's the difference between refs and state?

https://react.dev/learn/referencing-values-with-refs#differences-between-refs-and-state

#### useImperativeHandle

`useImperativeHandle` is a React Hook that lets you customize the handle exposed as a ref.

**Syntax**

```
useImperativeHandle(ref, createHandle, dependencies?)
```

**Parameters**

`ref`: The ref you received as the second arg from the `forwardRef` render function.

`createHandle`: A function that takes no arguments and returns the ref handle you want to expose.

<small>_optional_</small> `dependencies`: The list of all reactive values references inside of the `createHandle` code.

**Returns**

`useImperativeHandle` returns undefined.

---

### Effect Hooks ✨

Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

#### useEffect

`useEffect` is a React Hook that lets you synchronize a component with an external system.

**Syntax**

```
useEffect(setup, dependencies?)
```

**Parameters**

`setup`: The function with your effect's logic. Optionally your setup function may also return a _cleanup_ funtion.

- When your component is added to the DOM, React will run your setup function. After every re-render with changed dependencies, React will first run the cleanup function with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function.

<small>_optional_</small> `dependencies`: The list of all reactive values referenced inside of the `setup` code.

``

**Returns**

`useEffect` returns undefined.


**How to Use The Dependency Array**

1. Passing **no dependency** array

- If you pass no dependency array at all, your Effect runs after every single render (and re-render) of your component.


2. Passing an **empty dependency** array

- It will only run after the initial render

3. **Passing a dependency** array

- If you specify the dependencies, your Effect runs after the initial render AND after re-renders with changed dependencies.

**Use Cases**

- Connecting to an external system
- Wrapping Effects in custom Hooks
- Controlling a non-React widget
- Fetching data


#### useLayoutEffect

#### useInsertionEffect

---

### Performance Hooks 🏎️

A common way to optimize re-rendering performance is to skip unnecessary work.

_For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render._

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

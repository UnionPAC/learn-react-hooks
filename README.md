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

> `useLayoutEffect` can hurt performance. Prefer useEffect when possible.

`useLayoutEffect` is a version of useEffect that fires before the browser repaints the screen.

**Syntax**

```
useLayoutEffect(setup, dependencies?)
```

**Parameters**

`setup`: The function with your Effect's logic. May also optionally return a cleanup function.

<small>_optional_</small> `dependencies`: The list of all reactive values referenced inside of the `setup` code.

**Returns**

`useLayoutEffect` returns undefined.

**Usage**

- Measuring layout before the browser repaints the screen

#### useInsertionEffect

> `useInsertionEffect` is for CSS-in-JS library authors. Unless you are working on a CSS-in-JS library and need a place to inject the styles, you probably want `useEffect` or `useLayoutEffect` instead.

`useInsertionEffect` allows inserting elements into the DOM before any layout effects fire.

**Syntax**

```
useInsertionEffect(setup, dependencies?)
```

**Parameters**

`setup`: The function with your Effect's logic. May also optionally return a cleanup function.

<small>_optional_</small> `dependencies`: The list of all reactive values referenced inside of the `setup` code.

**Returns**

`useInsertionEffect` returns undefined.

**Usage**

- Injecting dynamic styles from CSS-in-JS libraries

---

### Performance Hooks 🏎️

A common way to optimize re-rendering performance is to skip unnecessary work.

_For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render._

#### useMemo

`useMemo` is a React Hook that lets you cache the result of a calculation between re-renders until its dependencies change.

**Syntax**

```
const cachedValue = useMemo(calculateValue, dependencies)
```

**Parameters**

`calculateValue`: The function calculating the value that you want to cache.

`dependencies`: The list of all reactive values referenced inside of the `calculateValue` code.

**Returns**

On the inital render, `useMemo` returns the result of calling `calculateValue` with no arguments.

During the next renders, it will either return an already stored value from the last render, or call `calculateValue` again and return the result that `calculateValue` has returned.

**Usage**

- Skipping expensive recalculations

> _Note: You should only rely on `useMemo` as a performance optimization. Add `useMemo` after the code has been written and is working to possibly improve performance._

- Skipping re-rendering of components

- Memoizing a dependency of another Hook

#### useCallback

`useCallback` is a React hook that lets you cache a function definition between re-renders.

**Syntax**

```
const cachedFn = useCallback(fn, dependencies)
```

**Parameters**

`fn`: The function value that you want to cache.

`dependencies`: The list of all reactive values referenced inside of the `fn` code.

**Returns**

On the initial render, `useCallback` returns the `fn` function you have passed.

During subsequent renders, it will either return an already stored `fn` function from the last render (if the dependencies haven’t changed), or return the `fn` function you have passed during this render.

**Usage**

- Skipping re-rendering of components
- Updating state from a memoized callback
- Optimizing a custom Hook

**Important**: In JavaScript, a function () {} or () => {} always creates a different function. That means the props will never be the same, and a `memo` optimization won't work.

#### useTransition

`useTransition` is a React hook that lets you update the state without blocking the UI.

**Syntax**

```
const [isPending, startTransition] = useTransition()
```

**Parameters**

`useTransition` does not take any parameters.

**Returns**

`useTransition` returns an array with exactly two items.

1. The `isPending` flag that tells you whether there is a pending item

2. The `startTransition` function that lets you mark a state update as a transition

**Usage**

- Marking a state update as a non-blocking transition
- Updating the parent component in a transition
- Displaying a pending visual state during the transition
- Preventing unwanted loading indicators
- Building a Suspense-enabled router

#### useDeferredValue

`useDeferredValue` is a React Hook that lets you defer updating a part of the UI.

**Syntax**

```
const deferredValue = useDeferredValue(value)
```

**Parameters**

`value`: The value you want to defer. It can have any type.

**Returns**

During the initial render, the returned deferred value will be the same as the value you provided. During updates, React will first attempt a re-render with the old value, and then try another re-render in the background with the new value.

**Usage**

- Showing stale content while fresh content is loading

---

### Other Hooks 🪝

These Hooks are mostly useful to library authors and aren’t commonly used in the application code.

#### useDebugValue

`useDebugValue` is a React Hook that lets you add a label to a custom Hook in React DevTools.

**Syntax**

`useDebugValue(value, format?)`

**Parameters**

`value`: The value you want to display in React DevTools. It can have any type.

_optional_ `format`: A formatting function. When the component is inspected, React DevTools will call the formatting function with the `value` as the argument, and then display the returned formatted valued.

**Returns**

`useDebugValue` does not return anything

#### useId

`useId` is a React Hook for generating unique IDs that can be passed to accessibility attributes.

**Syntax**

`const id = useId()`

**Parameters**

`useId` does not take any parameters.

**Returns**

`useId` returns a unique ID string associated with this particular `useId` call in this particular component.

**Usage**

- Generating unique ID's for accessibility attributes

**Regular HTML**

```
<label>
  Password:
  <input
    type="password"
    aria-describedby="password-hint"
  />
</label>
<p id="password-hint">
  The password should contain at least 18 characters
</p>
```

**Using `useId` in React**

```
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}
```

#### useSyncExternalStore

`useSyncExternalStore` is a React Hook that lets you subscribe to an external store.

**Syntax**

`const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)`

**Parameters**

`subscribe`: A function that takes a single `callback` argument and subscribes it to the store. When the store changes, it should invoke the provided `callback`.

`getSnapshot`: A function that returns a snapshot of the data in the store that's needed by the component.

*optional* `getServerSnapshot`: A function that returns the initial snapshot of the data in the store.

**Returns**

The current snapshot of the store which you can use in your rendering logic.

**Usage**

- Subscribing to an external store
- Subscribing to a browser API
- Extracting the logic to a custom Hook


---

### Custom Hooks 👑

https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component

---

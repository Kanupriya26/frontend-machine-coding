# REACT: A library whose job is to build and update user interfaces(UIs) efficiently.
(It keeps the screen in sync with application data)
What **React** deliberately does not do, which is why it is called a library:
 * routing(React Router, Next.js's Router)
 * data fetching and caching(fetch, axios)
 * building and bundline(Vite)
 * server rendering and the app structure(Next.js)
 
## Props: 
         Values a parent passes down to its child component, gathered into one object..
Q) Can a child change its own props?
-> No, A child can only read its props, react accordingly(by runnng effect hook) but cant's change its props.

## Fiber: 
         React's internal persistent record of "this component, at this place in the tree".
A plain JavaScript object representing a single unit of work and component instance which stores that component's hook
values(like **state**) as an ordered list of slots.
**Analogy** -->> A new notebook assigned to each component at the very first render & this notebook is then used for further renders.

## Setter:
          An instruction to React about which value a slot should hold on the next render, plus a request for that render.
Q) Where does state lives between renders?
-> In the fiber object, as an ordered list of slots.

## Hooks and call order:
Q) Why can't useState go inside an if statement?
-> React matches state to hooks by call order, not by variable name(like dictionary). React decided which stored value goes 
to which **useState** call by counting the calls(1st, 2nd, 3rd), not by looking at you variable names. 
**So the order must never change between renders.**
A useState inside an if statement can be skipped in some renders, which shifts every slot after it, so values land on the wrong variables. React throws an error when number of hooks changes between renders.

## React Batching:
                It is a performance optimisation mechanism where React groups multiple state updates into single re-render cycle.
Q) How many re-renders do several setters in one handler cause?
-> Causes **one-render**, not **one-each**. (process is termed as React Batching)

## arguments of a setter
Q) When should you pass a function to a setter instead of a plain value, and why?
-> **Use prev => … when the new value depends on the old value.**
Several updates can be queued before a re-render (batching). The snapshot (this render’s photo) can't see updates 
that are already queued in the same batch, but **prev** always receives the **latest** value, including earlier updates in the same batch.
Example: calling toggleItem("travel-01") twice in one handler. With the snapshot, both calls read [] and the result is wrong. With prev, the second call sees the first call’s result, so it’s correct.

**A plain value is fine when the new value doesn’t depend on the old one,** like setting the text a user typed: setUsername(e.target.value).

## Derived State:
                 A value **calculated during render** from existing states and props, and **not stored** in its own state.

## What makes a component 'controlled'?
-> We might say a component is 'controlled' when **its important information is driven by props** rather than its own local state.
This lets the parent component fully specify(control) its behaviour.
Controlled component can have its own local state(like hover over tooltip)
Idea is **Who decides the important value** within a component.

## When does an effect run? How does React decide whether dependencies "changed"?
-> **useEffect** - runs **after the render is painted on screen**, not during render.
                 - always after the first render, then only when a dependency changed.
Dependencies are compared with *Object.is*: primitives are compared by value, objects/arrays by reference.
So an object/array created freshly during every render counts as "changed" everytime.

## Why does React need a *key* on list items, and what makes a good key?
-> **key** - uniquely identifies an item in the list (analogy: nameplate among several identical looking houses)
           - gives each item list a unique identity, so React can **match items between renders**



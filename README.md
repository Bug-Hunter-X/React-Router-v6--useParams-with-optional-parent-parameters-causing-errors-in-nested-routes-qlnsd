# React Router v6: Handling Undefined Parent Parameters in Nested Routes

This repository demonstrates a common issue in React Router v6 when using the `useParams` hook within nested routes where a parent route has an optional parameter.  If the parent parameter is undefined, the child component might encounter errors when attempting to access it.

The `bug.js` file showcases the problematic code, where the `ChildComponent` tries to access a potentially undefined `parentParam`. The `bugSolution.js` file provides a solution using optional chaining to gracefully handle the undefined parameter.
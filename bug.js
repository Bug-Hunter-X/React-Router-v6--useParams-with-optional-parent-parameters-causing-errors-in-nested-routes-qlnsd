In React Router Dom v6, a common issue arises when using the `useParams` hook within a component nested deeply within the route hierarchy.  If the parent route uses an optional parameter, which defaults to undefined, and the child route attempts to access a parameter from the parent that is undefined, it can cause unexpected behavior or errors. This is because the child component doesn't have access to the parent's parameters if the parameter in the parent route is undefined.

For example:

```javascript
// Parent Route
<Route path="/:parentParam?" element={<ParentComponent />}>
  <Route path=":childParam" element={<ChildComponent />} />
</Route>

// Child Component
function ChildComponent() {
  const { childParam, parentParam } = useParams();
  // parentParam will be undefined if :parentParam is not provided in the URL
  console.log(parentParam, childParam); // Potential error if parentParam is undefined
  return <div>Child Component</div>;
}
```

If the URL is `/someChildParam`, `parentParam` will be `undefined`, potentially causing errors if the `ChildComponent` doesn't handle this case properly.
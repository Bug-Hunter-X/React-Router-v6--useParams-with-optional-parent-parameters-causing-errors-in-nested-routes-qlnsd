The solution involves using optional chaining (?.) to safely access the `parentParam` in the `ChildComponent`:

```javascript
// Child Component
function ChildComponent() {
  const { childParam, parentParam } = useParams();
  console.log(parentParam?.toString(), childParam); // Use optional chaining
  return (
    <div>Child Component: Parent Parameter: {parentParam?.toString()} </div>
  );
}
```

This approach prevents errors by checking if `parentParam` is defined before attempting to access it. If `parentParam` is `undefined`, the expression `parentParam?.toString()` will evaluate to `undefined` without throwing an error.  Alternatively you can provide a default value.

```javascript
console.log(parentParam || 'Default value', childParam);
```
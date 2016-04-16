- Issue 1

Warning: render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.  
``` jsx
ReactDOM.render(<Component />, document.body);
ReactDOM.render(<Component />, document.getElementById('react-root'));
```

- Issue 2

Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `CommentList`. See https://fb.me/react-warning-keys for more information.

```jsx
  render: function() {
    var results = this.props.results;
    return (
      <ol>
        {results.map(function(result) {
          return <li key={result.id}>{result.text}</li>;
        })}
      </ol>
    );
  }
```

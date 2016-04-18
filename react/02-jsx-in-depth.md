# JSX in Depth

## 1. HTML to JSX
```html
<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>
```
转换为JSX
```jsx
var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        {/* Hello world */}
        <div className="awesome" style={{border: '1px solid red'}}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
        </div>
        <p>Enter your HTML here</p>
      </div>
    );
  }
});
```
- `class` => `className`
- `for` => `htmlFor`
- 样式`style="border: 1px solid red"` => `style={{border: '1px solid red'}}`
- 注释`<!-- Hello world -->` => `{/* Hello world */}`

## 2. Namespaced Components
```jsx
var Form = MyFormComponent;
var FormRow = Form.Row;
var FormLabel = Form.Label;
var FormInput = Form.Input;

var App = (
  <Form>
    <FormRow>
      <FormLabel />
      <FormInput />
    </FormRow>
  </Form>
);
```
可以写成下面这种形式
```jsx
var Form = MyFormComponent;

var App = (
  <Form>
    <Form.Row>
      <Form.Label />
      <Form.Input />
    </Form.Row>
  </Form>
);
```

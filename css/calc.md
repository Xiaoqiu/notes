```css
.calc {
    height: 100px;
    border: 1px solid #f00;
    padding: 10px;

    width: 70%; /* fallback for browsers without support for calc() */
    /* Firefox */
    width: -moz-calc(75% - 100px);
    /* WebKit: Chrome, Safari */
    width: -webkit-calc(75% - 100px);
    /* Opera */
    width: -o-calc(75% - 100px);
    /* Standard: Chrome, Safari, Firefox */
    width: calc(75% - 100px);
}
```

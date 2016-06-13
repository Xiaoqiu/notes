- linear-gradient
- radial-gradient

```
.linear-gradient {
  background-color: #F07575; /* fallback color if gradients are not supported */
  background-image: -webkit-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* For Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
  background-image: -moz-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* For Firefox (3.6 to 15) */
  background-image: -o-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* For old Opera (11.1 to 12.0) */
  background-image: linear-gradient(to bottom, hsl(0, 80%, 70%), #bada55); /* Standard syntax; must be last */
```

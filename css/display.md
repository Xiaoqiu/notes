# [display属性](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- block
- inline
- inline-block
- flex
- list-item
- table

`inline-block`: 对内表现为 `block`，对外表现为 `inline`（也就是可以设置宽高的 `inline`）


- [CSS Display](https://www.w3.org/TR/css-display-3/)

```
<display-outside>  = block | inline | run-in ;
<display-inside>   = flow | flow-root | table | flex | grid | ruby ;
<display-listitem> = list-item && <display-outside>? && [ flow | flow-root ]?
<display-internal> = table-row-group | table-header-group |
                     table-footer-group | table-row | table-cell |
                     table-column-group | table-column | table-caption |
                     ruby-base | ruby-text | ruby-base-container |
                     ruby-text-container ;
<display-box>      = contents | none ;
<display-legacy>   = inline-block | inline-list-item |
                     inline-table | inline-flex | inline-grid ;
```

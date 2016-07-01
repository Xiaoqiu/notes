## Syntax

### ~ (tilde)
`~1.2.3` 相当于 `>=1.2.3 <1.3.0` (<x.(y+1).0)
`~1.2` 相当于 `1.2.x` (<x.(y+1))

### ^ (caret)
`^1.2.3` 相当于 `>=1.2.3 <2.0.0` (<(x+1).0.0)
`^0.2.3` 相当于 `>=0.2.3 <0.3.0` (<0.(y+1).0)
`^0.0.3` 相当于 `>=0.0.3 <0.0.4` (<0.0.(z+1))

## Reference
> [The semantic versioner for npm](https://docs.npmjs.com/misc/semver)

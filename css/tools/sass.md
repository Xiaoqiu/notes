## Install
```shell
gem install sass
sass -v
```

## Usage
### 1. 变量
```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

### 2. 嵌套
```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```

### 3. 导入

```scss
// _reset.scss

html,
body,
ul,
ol {
   margin: 0;
  padding: 0;
}

// base.scss

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```


## Issues
```
ERROR:  Could not find a valid gem 'sass' (>= 0), here is why:
          Unable to download data from https://ruby.taobao.org/ - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://ruby.taobao.org/specs.4.8.gz)
```

## Reference
> - [SASS学习参考](http://www.zouyesheng.com/sass.html)

## Install
```shell
gem update --system
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

### 4. 混入(Mixins)
```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
```

### 5. 继承
```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

### 6. 运算符
```scss
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

## Issues
```
ERROR:  Could not find a valid gem 'sass' (>= 0), here is why:
          Unable to download data from https://ruby.taobao.org/ - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://ruby.taobao.org/specs.4.8.gz)
```

## Reference
> - [SASS学习参考](http://www.zouyesheng.com/sass.html)

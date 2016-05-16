## 1. 注释
### 1.1 函数的注释需要写明功能，参数的类型、含义，返回值
```javascript
// source code from sequelizejs

/**
* Search for a single instance by its primary key.
*
* @param  {Number|String|Buffer}      id The value of the desired instance's primary key.
* @param  {Object}                    [options]
* @param  {Transaction}               [options.transaction] Transaction to run query under
* @param  {String}                    [options.searchPath=DEFAULT] An optional parameter to specify the schema search_path (Postgres only)
*
* @see {Model#findAll}           for a full explanation of options
* @return {Promise<Instance>}
* @alias findByPrimary
*/
Model.prototype.findById = function(param, options) {
  // return Promise resolved with null if no arguments are passed
  if ([null, undefined].indexOf(param) !== -1) {
    return Promise.resolve(null);
  }

  options = optClone(options) || {};

  if (typeof param === 'number' || typeof param === 'string' || Buffer.isBuffer(param)) {
    options.where = {};
    options.where[this.primaryKeyAttribute] = param;
  } else {
    throw new Error('Argument passed to findById is invalid: '+param);
  }

  // Bypass a possible overloaded findOne
  return Model.prototype.findOne.call(this, options);
};
```

### 1.2 变量的注释使用行注释
```javascript
var currentUserId      = 0; // 当前用户id
var currentCompanyId   = 0; // 当前公司id
var currentCompanyName = ''; // 当前公司name
```

## 2. 声明
### 2.1 声明变量，每个变量单独一行
```javascript
var currentUserId      = 0;
var currentCompanyId   = 0;
var currentCompanyName = '';
```
Uglify后会自动变成如下形式
```javascript
var currentUserId = 0, currentCompanyId = 0, currentCompanyName = '';
```

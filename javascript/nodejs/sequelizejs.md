# Sequelize
ORM for Node.js

## Usage

### Raw queries
```javascript
sequelize.query('SELECT * FROM projects', { model: Projects }).then(function(projects){
  // Each record will now be a instance of Project
})
```

# deploy-mongo-compose

This repository is to show an example of deploying mongo db using docker compose

Create file **.env**

```
MONGO_INITDB_ROOT_USERNAME="root"
MONGO_INITDB_ROOT_PASSWORD="rootpassword"
```

This file is configuration initial for mongodb

Costumize file **mongo-init.js** for your configurations. Example: 

```js
db = db.getSiblingDB('prod_db');
db.createUser(
  {
    user: 'user_db',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'prod_db' }],
  },
);
db.createCollection('collection');
```
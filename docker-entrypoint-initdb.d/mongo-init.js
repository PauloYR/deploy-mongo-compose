db = db.getSiblingDB('prod_db');
db.createUser(
  {
    user: 'user_db',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'prod_db' }],
  },
);
db.createCollection('collection');
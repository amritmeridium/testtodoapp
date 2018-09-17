// cd Program Files\MongoDB\Server\4.0\bin\
// mongod.exe --dbpath /Users/dev001/mongo-data


// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo DB server');
  const myDb = db.db('TodoApp');

  // myDb.collection('Todos').find({
  //   _id: new ObjectID('5b9ffbbee977711d08cd478b')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  myDb.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('unable to fetch todos', err);
  });

  // db.close();
});

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

  // deleteMany
  // myDb.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // myDb.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  myDb.collection('Todos').findOneAndDelete({
  _id: new ObjectID("5b9ffbbee977711d08cd478b")
}).then((result) => {
  console.log(JSON.stringify(result, undefined,2));
});

  // db.close();
});

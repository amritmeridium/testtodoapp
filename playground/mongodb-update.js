// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo DB server');
  const myDb = db.db('TodoApp');

  // myDb.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b9ffbbb56395c1d1c222f9a')
  // }, {
  //   $set: {
  //     Completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  myDb.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b9ffbbb56395c1d1c222f9a')
  }, {
    $set: {
      Completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});

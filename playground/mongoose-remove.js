const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5bb453ab3ece6e27ec34acf1').then((todo) => {
  console.log(todo);
});

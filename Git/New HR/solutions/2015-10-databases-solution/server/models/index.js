var db = require('../db');

var _ = require('lodash');
var bluebird = require('bluebird');


// Takes a SQL querystring and returns a function, which, given the
// querystring parameters will execute the query and return a Promise
// with its results.
var makeExecutor = function (queryString) {
  // This function will execute the query when called.
  return function (queryArguments) {
    // Create the query function, promisify it, and call it.
    return bluebird.promisify(db.query.bind(db, queryString, queryArguments))();
  };
};

var makeModel = function (querys) {
  return {
    get: makeExecutor(querys.get),
    post: makeExecutor(querys.post)
  }
}

module.exports = {

  messages: makeModel({
    get: ["SELECT messages.id, messages.text, messages.roomname, users.username",
          "FROM messages LEFT OUTER JOIN users ON messages.userid = users.id",
          "ORDER BY messages.id DESC;"].join(' '),
    post: ["INSERT INTO Messages(text, userid, roomname)",
           "VALUES (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?)"].join(' ')
  }),

  users: makeModel({
    get: "SELECT * FROM users",
    post: "INSERT INTO users(username) VALUES (?);"
  })
  };


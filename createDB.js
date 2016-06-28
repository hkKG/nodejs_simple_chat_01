var mongoose = require('./libs/mongoose');
mongoose.set('debug', true);// db.users.help()
var async = require('async');

async.series([
    open,
    dropDatabase,
    requireModels,
    createUsers,
    outputUsers
], function (err) {
    if (err) console.log(err);
    mongoose.disconnect();
    process.exit(err ? 255 : 0);
});
function open(callback) {
    mongoose.connection.on('open', callback);
};

function dropDatabase(callback) {
    var db = mongoose.connection.db;
    db.collection('users').find().toArray(function (err, results) {
        console.dir(results);
    });
    db.dropDatabase(callback);
};

function requireModels(callback) {
    require('./models/user').User;
    async.each(Object.keys(mongoose.models), function (modelName, callback) {
        mongoose.models[modelName].ensureIndexes(callback);
    }, callback);
};

function createUsers(callback) {

    var users = [
        {username: 'Tom', password: "Tom"},
        {username: 'Jon', password: "Jon"},
        {username: 'admin', password: "admin"}
    ];

    async.each(users, function (UserData, callback) {
        var user = new mongoose.models.User(UserData);
        user.save(callback);
    }, callback);

};

function outputUsers(callback) {
    var db = mongoose.connection.db;
    db.collection('users').find().toArray(function (err, results) {
        if (err) console.log(err);
        console.dir(results);
    });
    setTimeout(callback, 300);
};

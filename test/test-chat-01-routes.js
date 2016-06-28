/*
ToDo 16.06.2016:

 app.get('/', require('./frontpage').get); ==> http://localhost:3000/ ==> +++

 app.get('/login', require('./login').get); ==> http://localhost:3000/login ==> +++

 app.post('/login' , require('./login').post); ==> http://localhost:3000/login ==> ???

 app.post('/logout' , require('./logout').post); ==> http://localhost:3000/logout ==> ???

 app.get('/chat', checkAuth,require('./chat').get); ==> http://localhost:3000/chat ==> ???
 */

/**
 * BDD: Behavior Driven Development
 *
 * Given-When-Then scenarios as test
 *
 * Keywords: mocha, chai, test, bdd, tdd,
 *
 * test anything protocol includes UnitTests and TestHarness
 *
 * TestHarness includes Test-Execution-Engine and Test-Data-Repository
 *
 * https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
 *
 * https://visionmedia.github.io/superagent
 *
 * ping 127.0.0.1
 *
 * webapplog.com/tdd
 *
 * chaijs.com/guide/stylis
 *
 * visionmedia.github.io/superagent
 * visionmedia.github.io/superagent/#parsing-respons-bodies
 */

var request = require("superagent");
var chai = require("chai"),
    assert = chai.assert, // JUnit, TDD => with/wihout - optional message
    expect = chai.expect, // BDD
    should = chai.should(); // BDD

describe("### test-chat-01-routes.js ==> http://localhost:3000  ###", function () {
    it("returns status 200 for /", function (done) {
        request
        // .get('http://localhost:3000')
            .get('http://127.0.0.1:3000')
            .end(function (err, res) {
                // we expect error to not exist
                should.not.exist(err);
                // we expect res to exist be an object
                should.exist(res);
                res.should.be.an('object');
                res.status.should.equal(200);
                res.status.should.eql(200);
                //------------------------
                expect(res.status).equal(200);
                assert(res.statusCode == 200);
                done();
            });
    });
});


describe("### test-chat-01-routes.js ==> http://localhost:3000  ###", function () {
    it("returns status 200 for /login", function (done) {
        request
        // .get('http://localhost:3000')
            .get('http://127.0.0.1:3000')
            .end(function (err, res) {
                // we expect error to not exist
                should.not.exist(err);
                // we expect res to exist be an object
                should.exist(res);
                res.should.be.an('object');
                res.status.should.equal(200);
                res.status.should.eql(200);
                //------------------------
                expect(res.status).equal(200);
                assert(res.statusCode == 200);
                done();
            });
    });
});
/**
 *  !!! used as template !!!
 *
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
 */


var request = require("superagent");
var chai = require("chai"),
    assert = chai.assert, // JUnit, TDD => with/wihout - optional message
    expect = chai.expect, // BDD
    should = chai.should(); // BDD
/*
describe("### superagent-test-mean-mvc.js ==> http://localhost:1337  ###", function () {
    it("returns status 200 for /", function (done) {
        request
           // .get("http://localhost:1337")
            .get("http://127.0.0.1:1337")
            .end(function (err, res) {
                // we expect error to not exist
                should.not.exist(err);
                // we expect res to exist be an object
                should.exist(res);
                res.should.be.an('object');
                expect(res.status).equal(200);
                done();
            });
    });
    it("returns status 200 for /express", function (done) {
        request
           // .get("http://localhost:1337/express")
            .get("http://127.0.0.1:1337/express")
            .end(function (err, res) {
                // we expect error to not exist
                should.not.exist(err);
                // we expect res to exist be an object
                should.exist(res);
                res.should.be.an('object');
                expect(res.status).equal(200);
                done();
            });
    });
    it("returns status 404 for /express/user", function (done) {
        request
           // .get("http://localhost:1337/express/user")
            .get("http://127.0.0.1:1337/express/user")
            .end(function (err, res) {
                //todo : offen ==> noch zu implementieren
                // we expect error to not exist
                //should.not.exist(err);
                // we expect res to exist be an object
                should.exist(res);
                res.should.be.an('object');
                expect(res.status).equal(404);
                done();
            });
    });
});
*/
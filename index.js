exports.printMsg = function () {
    console.log("This is a message from the demo package");
}

let Input = require('./components/Input');
let Email = require('./components/Email');

module.exports = { Input, Email }
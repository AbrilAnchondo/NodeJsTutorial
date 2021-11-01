const path = require("path");

// path to file responsible for spinning up our app, that way we can then import the path to the route directory
module.exports = path.dirname(require.main.filename);

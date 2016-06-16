var buble = require("rollup-plugin-buble");

module.exports = {
    entry: "./index.js",
    dest: "./out.js",
    format: "iife",
    plugins: [ buble() ]
};

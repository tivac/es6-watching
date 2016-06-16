// var buble = require("rollup-plugin-buble");
var typescript = require("rollup-plugin-typescript");

module.exports = {
    entry: "./index.js",
    dest: "./out.js",
    format: "iife",
    plugins: [ typescript() ]
};

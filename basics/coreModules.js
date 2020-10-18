const path = require("path");
const util = require("util");
const { log } = require("util"); //can import only the functionalities we need like this
const v8 = require("v8"); //statistics about program

util.log(path.basename(__filename)); //log with time
util.log(v8.getHeapStatistics());
log("Hi bitch");
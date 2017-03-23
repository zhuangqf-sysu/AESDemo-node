/**
 * Created by zq on 2017/3/23.
 */

const aes = require("./aes");
const fs = require("fs");

var clearText = fs.readFileSync("./file");
var key = "chuyj";
console.log(aes.md5(key));
var cipherText = aes.encrypt(clearText,key);
console.log("cipherText:"+cipherText);
console.log("clearText:"+aes.decrypt(cipherText,key));
cipherText = aes.encrypt(cipherText,"zhuangqf");
console.log("cipherText:"+cipherText);
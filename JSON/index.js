const fs = require('fs');

const biodata = {
    name    : "Vaibhav",
    age     : 19,
    stream  : "Computer Engineering"
};

// console.log(biodata.name);
// console.log(biodata.age);
// console.log(biodata.stream);
// console.log(biodata);

// // To convert object into JSON use below line of code....(stringify)
// const json = JSON.stringify(biodata);
// console.log(json);

// // To convert JSON into object use below line of code....(parse)
// const objDATA = JSON.parse(json);
// console.log(objDATA);

const json = JSON.stringify(biodata)

fs.writeFile('jsonData.json',json,(err) => {
console.log("done");
})

fs.readFile('jsonData.json',"utf-8", (err,data) => {
 console.log(data);
})






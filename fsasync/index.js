const fs = require("fs"); // to use first require that module
/*
// Creating a New File.
fs.writeFileSync('read.txt',"Welcome TO Node.Js");

// Updating or overwriting.
fs.writeFileSync('read.txt',"Ok Boomer");

// Adds Text or Data.
fs.appendFileSync('read.txt'," How are You?")

// To Read Data.
const buf_data = fs.readFileSync('read.txt'); 
// console.log(buf_data);

data = buf_data.toString();
console.log(data);

// TO Rename Text File.
fs.renameSync('read.txt','ReadWrite.txt');

*/

// fs.mkdirSync('Vaibhav');
// fs.writeFileSync('Vaibhav/bio.txt',"Ye le Data");
// fs.appendFileSync('Vaibhav/bio.txt'," Bohot Saara Data lele"); 

// const data = fs.readFileSync('Vaibhav/bio.txt');
// stringdata = data.toString(); 
// console.log(stringdata);

// fs.renameSync('Vaibhav/bio.txt','Vaibhav/data.txt');

// fs.unlinkSync('Vaibhav/data.txt');

// fs.rmdirSync('Vaibhav');


// Async

// Creating a file.
// fs.writeFile('read.txt',"Today is Laxmi Pujan !",
// (err) => {
//  console.log("Completed ! Your file is Created");
// });

// Adding Data
// fs.appendFile('read.txt'," So Celebrate with your family",
// (err) => {
//     console.log("Hogaya")
// });

// Reading Data
// fs.readFile('read.txt','UTF-8',
// (err,data) => {
// console.log(data);
// });

// CHALLENGE 2

// fs.mkdir('Vaibhav',
// (err) =>{
//  console.log("Created A Folder!")
// }); 

// fs.writeFile('./Vaibhav/bio.txt','BanaDiya File', (err) => {
// console.log("Created a file!")
// });

// fs.appendFile('./Vaibhav/bio.txt'," Ye le add kardiya" , (err) => {
// console.log("Appended")
// });

// fs.readFile('./Vaibhav/bio.txt','utf-8', (err,data) => {
// console.log(data);
// });

// fs.rename('OP.txt','./Vaibhav/bio.txt' , (err) => {
//    console.log("Renamed")
// });

// fs.unlink('./Vaibhav/bio.txt', (err) => {
//  console.log("Deleted File")
// });

// fs.rmdir('./Vaibhav', (err) => {
//     console.log("Deleted Folder")
// });


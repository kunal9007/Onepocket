const express = require('express');
const app = express();
const fs = require('fs/promises');

app.use(express.json());

app.listen(3000, (req, res) => {
    console.log("started")
})
//function for question 1 is at end of the page

app.get("/status", (req, res) => {
    const status = {
        "Status": "Running"
    };
    res.send(status);
})

//2 : Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.
app.get("/sumOfElements", (req, res) => {
    const arr = req.query.arr;
    console.log(arr);
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    };
    console.log(sum);
    res.send({ sum });
})
//http://localhost:3000/sumOfElements?arr=1&arr=2&arr=3

//3 : Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.
app.get("/file", async (req, res) => {
    let file = await fs.readFile("./data.txt", "utf8");
    file = file.replace(/\s+/g,' ').trim();
    console.log(file);
    const arr = file.split(" ");
    const count = arr.length;
    console.log(count)
    res.send({ count });
})
//http://localhost:3000/file

//1 : Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests.
app.use("*", (req, res, next) => {
    res.send("Hello World");
    next();
});
//returns hello world for every req unless its an already defined API above

let fs = require("fs");
let path = require("path");

let displayObj = require("./displayContent");

let inputArray = process.argv.slice(2);

let options = [];
let paths = [];

for (let i = 0; i < inputArray.length; i++) {
    let firstChar = inputArray[i].charAt(0);
    if (firstChar === '-') {
        options.push(inputArray[i]);
    }
    else {
        paths.push(inputArray[i]);
    }
}

for (let i = 0; i < paths.length; i++) {
    if (fs.existsSync(paths[i]) === false) {
        console.log("Wrong Path");
        return;
    }
}

let wholeContent = "";
for (let i = 0; i < options.length; i++) {
    let response = "";
    let flag=true;
    if (options[i] === "-s") {
        response = fs.readFileSync(paths[i]).toString();
        let arr = response.split("\r\n");

        for (let j = 0; j < arr.length;) {
            if (arr[j] !== "") {
                wholeContent += arr[j];
                j++;
            }
            else {
                while (arr[j] === "") {
                    j++;
                }
            }
            wholeContent += "\n";
        }
        console.log(wholeContent);
    }
    else if (options[i] == "-n") {
        let arr = wholeContent.split("\n");

        for (let j = 0; j < arr.length; j++) {
            arr[j] = (j + 1) + " " + arr[j];
        }
        console.log(arr.join("\n"));
        flag=false;
    }
    else if (options[i] === "-b" && flag) {
        let arr = wholeContent.split("\n");

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] !== "")
                arr[j] = (j + 1) + " " + arr[j];
        }
        console.log(arr.join("\n"));
    }
}

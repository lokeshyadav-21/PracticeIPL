const fs = require("fs");

const content = fs.readFileSync("matches.json", "utf8");

const parsedContent = JSON.parse(content);


result = {}

for (let i = 0; i < parsedContent.length; i++){

    if (result[parsedContent[i].season]){

        result[parsedContent[i].season] += 1

    } else {

        result[parsedContent[i].season] = 1
    }
}

console.log(result);

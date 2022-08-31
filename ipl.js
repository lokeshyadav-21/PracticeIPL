// Q1 Number of matches played per year for all the years in IPL.


const fs = require("fs");

const content = fs.readFileSync("matches.json", "utf8");

const parsedContent = JSON.parse(content);




let result = {}       // created empty object

    for (let i = 0; i < parsedContent.length; i++){       // for loop iteration for to iterate each of the item of the data


        if (result[parsedContent[i].season]){             // with if conditional statement checking that season in the data

            result[parsedContent[i].season] += 1          // if it present season and matches count will be added 

        } else {

            result[parsedContent[i].season] = 1           // if the season is not present new season will be created
        }
    }

console.log(result); // season and matches played per year will shown


/* OUTPUT:-
{
  '2008': 58,
  '2009': 57,
  '2010': 60,
  '2011': 73,
  '2012': 74,
  '2013': 76,
  '2014': 60,
  '2015': 59,
  '2016': 60,
  '2017': 59
}
*/



// fs.writeFileSync("/home/lokesh/newIPL/src/public/output/matchesPlayedPerYear.json", JSON.stringify(result), "utf8", (err) => {

//     if (err) {

//         console.log(err)
//     }
// })

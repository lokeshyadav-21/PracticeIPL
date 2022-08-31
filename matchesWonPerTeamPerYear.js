const fs = require("fs");

const content = fs.readFileSync("matches.json", "utf8");

const matches = JSON.parse(content);


let matchesWonPerTeamPerYear = {};                                // Creating empty Object 

for (let index = 0; index < matches.length; index++) {            // iteration for to iterate each of the element in the matches

    let season = matches[index].season;                           // holds the season data of the matches in Season variable

    let winner = matches[index].winner;                           // holds the winner data of the matches in Winner variable

    if (matchesWonPerTeamPerYear[season]) {                       // if the Season present's inside matchesWonPerTeamPerYear

        if (matchesWonPerTeamPerYear[season][winner]) {           // in nested if condition if the Winner present's inside matchesPlayedPerYear[season]

            matchesWonPerTeamPerYear[season][winner] += 1         // if condition satisfies the matchesPlayedPerYear[season][winner] get increments by 1

        } else {

            matchesWonPerTeamPerYear[season][winner] = 1          // if condition not satisfied then matchesWonPerTeamPerYear[season][winner] initializing by 1
        }
    } else {

        matchesWonPerTeamPerYear[season] = {}                     // if parent if conditon not satisfied then matchesWonPerTeamPerYear[season] assigning to {}

        matchesWonPerTeamPerYear[season][winner] = 1              // then matchesWonPerTeamPerYear[season][winner] initialize by 1
    }
}

console.log(matchesWonPerTeamPerYear);                            // consoling  the data of {season: { winner: count}}





// fs.writeFileSync("/home/lokesh/newIPL/src/public/output/matchesWonPerTeamPerYear.json", JSON.stringify(matchesWonPerTeamPerYear), "utf8", (err) => {

//     if (err) {

//         console.log(err)
//     }
// })


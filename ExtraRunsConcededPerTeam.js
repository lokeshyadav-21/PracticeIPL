const fs = require("fs");

const matchContent = fs.readFileSync("matches.json", "utf8");

const deliveriesContent = fs.readFileSync("/home/lokesh/newIPL/src/server/deliveries.json", "utf8");

let matches = JSON.parse(matchContent);


let deliveries = JSON.parse(deliveriesContent);


function getExtraRunsPerTeam(matches, deliveries) {

    let result = {};                                                           

    let ID = 0;                                                                

    for (let index = 0; index < matches.length; index++) {

        let season = matches[index].season;                                    

        if (season === '2016'){                                                //if condition is to get the particular year 2016 

            ID = matches[index].id                                             // ID overrides to matches[index].id of matches data

            for (let index2 = 0; index2 < deliveries.length; index2++) { 

                let match_id = deliveries[index2].match_id;                    
     
                let bowling_team = deliveries[index2].bowling_team             
    
                let extra_runs = deliveries[index2].extra_runs
    
                if (match_id === ID){                                          // if match_id equals to ID variable that which overrides before
    
                    if (result[bowling_team]){                                 // in nested if statement, if the bowling_team present in result 

                        result[bowling_team] += parseInt(extra_runs);          // result[bowling_team] increments by parseInt(extra_runs)

                    } else {
    
                        result[bowling_team] = parseInt(extra_runs);           // if above condition not satisfies then initializing new result[bowling_team] by parseInt(extra_runs)
                    }
                }
            }

        }
        
    }

    return result     // here extra runs conceded per team data will be stored

}

console.log(getExtraRunsPerTeam(matches, deliveries));


// fs.writeFileSync("/home/lokesh/newIPL/src/public/output/extraRunsConceded.json",

// JSON.stringify(getExtraRunsPerTeam(matches, deliveries)), "utf-8", (err)=> {if (err){

//     console.log(err)
//     }  

// });
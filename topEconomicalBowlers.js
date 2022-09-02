// Q4. Top 10 economical bowlers in the year 2015

const fs = require("fs");

const matchContent = fs.readFileSync("/home/lokesh/newIPL/src/server/matches.json", "utf8");

const matches = JSON.parse(matchContent);

const deliveriesContent = fs.readFileSync("/home/lokesh/newIPL/src/server/deliveries.json", "utf8");

const deliveries = JSON.parse(deliveriesContent);

function top10EconomicalBowlersIn2015(matches, deliveries){

    let result = {};

    let runsOfBowlers = {};

    let DeliveriesOfBowler = {};

    let ID = 0;
  
    for(let index = 0; index < matches.length; index++){

        let season = matches[index].season;

        if(season === "2015"){

          ID = matches[index].id;
          
        }
        for(let index2 = 0; index2 < deliveries.length; index2++){

            let match_id = deliveries[index2].match_id;

            let bowler = deliveries[index2].bowler;

            let total_runs = deliveries[index2].total_runs

            if(match_id === ID){

                if(runsOfBowlers[bowler]){

                    runsOfBowlers[bowler] += parseInt(deliveries[index2].total_runs);

                } else {

                    runsOfBowlers[deliveries[index2].bowler] = parseInt(total_runs);
                }

                if (DeliveriesOfBowler[bowler]) {

                    DeliveriesOfBowler[bowler]+=1;

                } else {

                    DeliveriesOfBowler[bowler]=1;

                }
            }
        }
    }

    let dataOfrunsOfBowlers = Object.keys(runsOfBowlers);

    for(let key = 0; key < dataOfrunsOfBowlers.length; key++){

        let RunsConceded = runsOfBowlers[dataOfrunsOfBowlers[key]];

        let oversBowled = DeliveriesOfBowler[dataOfrunsOfBowlers[key]];

        runsOfBowlers[dataOfrunsOfBowlers[key]] = ((RunsConceded)/oversBowled).toFixed(2);
    }
  
    result = Object.entries(runsOfBowlers).sort((a,b) => a[1]-b[1]).slice(0,10);
  
    return result;
    
  }

console.log(top10EconomicalBowlersIn2015(matches, deliveries));


fs.writeFileSync("/home/lokesh/newIPL/src/public/output/topEconomicalBowlers.json",

JSON.stringify(top10EconomicalBowlersIn2015(matches, deliveries)), (err) => {

    if (err) {

        console.log(err)
    }
});




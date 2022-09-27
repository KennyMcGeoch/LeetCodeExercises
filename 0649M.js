/**
 * @param {string} senate
 * @return {string}
 * Runtime: 726 ms, faster than 8.70% of JavaScript online submissions for Dota2 Senate.
Memory Usage: 48.9 MB, less than 8.70% of JavaScript online submissions for Dota2 Senate.
 */
 var predictPartyVictory = function(senate) {

    let senateArray = senate.split("")
    let lostVote = 0
    let result = 0

    while(result === 0){
        for (i=0; i<senateArray.length; i++){
            if (senateArray[i]){
                lostVote = senateArray.slice(i).findIndex(checkFaction);
                if (lostVote === -1){
                    lostVote = senateArray.findIndex(checkFaction)
                    if (lostVote === -1){
                        if(senateArray[0] === "R"){
                            return "Radiant"
                        }
                        else{
                            return "Dire"
                        }

                        result = 1
                    }
                }
                else {
                    lostVote += i
                }
                senateArray.splice(lostVote,1)
            }

            function checkFaction(faction){
                return faction !== senateArray[i]
            }
        }
    }    
};

predictPartyVictory("DRDDRRRDRDR")
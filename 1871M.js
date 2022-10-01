/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */

 var canReach = function(s, minJump, maxJump) {

    let iterations = s.length-1;
    let canGetTo = {[iterations]:true, "0":false}
    let sArray = s.split("")
    let maxSuccessJump = 0
    let jumpSkip
    
        if (sArray[iterations] === "1"){
        return false
        }
    

    for (i=iterations; i>0; i--){
        console.log("i iteration")
        if (canGetTo[i] === true){
            if (i - maxJump <= 0 && i- minJump >= 0){
                console.log(canGetTo)
                console.log(true)
                return true}
            for(j=minJump; j<= maxJump; j++){
                if(sArray[i-j] === "0"){
                    canGetTo[i-j] = true
                    console.log(canGetTo)
                    maxSuccessJump = i-j
                }
            jumpSkip = true
            }
            for (k=0; k<=minJump; k++){
                if (sArray[(k+i)-maxSuccessJump] === "1"){
                    jumpSkip = false
                }

            }
            if (jumpSkip === true && maxJump !== minJump){
                console.log(maxSuccessJump + " maxsuccess")
                i = maxSuccessJump + minJump + 1
                canGetTo[i-1] = true
            }
            console.log(i)
        }
    }
    console.log(canGetTo)
    console.log(canGetTo[0])
    console.log(canGetTo["0"])
    return canGetTo["0"]    
};

canReach("00000000",1,1)
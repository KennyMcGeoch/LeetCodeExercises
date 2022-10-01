/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */

 var canReach = function(s, minJump, maxJump) {

    let iterations = s.length-1;
    let canGetTo = {["0"]:true, [iterations]:false}
    let sArray = s.split("")
    let highestChange = 0
    
        if (sArray[0] === "1"){
        return false
        }
    

    for (i=0; i<iterations; i++){

        if (highestChange + maxJump < iterations){
            highestChange = i + sArray.slice(i+minJump,i+maxJump+1).lastIndexOf("0")
            console.log(sArray.slice(i+minJump,i+maxJump+1))
            console.log(highestChange + " highestChange and i = " + i)
            if (sArray[highestChange+1-minJump] === "0"){
                console.log("i changed")
                canGetTo[highestChange+1] = true
                canGetTo[highestChange+1-minJump] = true
                i = highestChange - minJump - 1
            }
        

            else if (canGetTo[i] === true){
                for (j=minJump; j<=maxJump; j++){
                    if (sArray[i+j] === "0"){
                        canGetTo[i+j] = true
                        highestChange = i+j
                    }

                }        
            }
        }
        else if (iterations - i >= minJump && iterations - i <= maxJump){
            console.log(canGetTo)
            console.log("True returned")
            return true
        }
        else if (canGetTo[i] === true){
            for (j=minJump; j<=maxJump; j++){
                if (sArray[i+j] === "0"){
                    canGetTo[i+j] = true
                    highestChange = i+j
                }

            }        
        }
        if (canGetTo[iterations] === true){
            console.log(canGetTo)
            console.log("True returned")
            return true
        }
    }
    console.log(canGetTo)
    console.log(canGetTo[iterations])
    return canGetTo[iterations]    
};

canReach("0101001101010101000000000000000000000000000000000000000000000000000000000000000",1,10)
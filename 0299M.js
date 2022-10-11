/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 * Runtime: 88 ms, faster than 85.71% of JavaScript online submissions for Bulls and Cows.
 * Memory Usage: 43.9 MB, less than 81.79% of JavaScript online submissions for Bulls and Cows.
 */
 var getHint = function(secret, guess) {

    let bulls = 0
    let cows = 0
    let iterations = secret.length
    let secretMap = {}

    for (i=0; i<iterations; i++){
        if (secretMap[secret[i]] === undefined){
            secretMap[secret[i]] = 1
        }
        else{
            secretMap[secret[i]]++
        }
    }

    for (i=0; i<iterations; i++){
        if (secret[i] === guess[i]){
            bulls++
        }
        if (secretMap[guess[i]] > 0){
            secretMap[guess[i]]--
            cows++
        }
    }
    cows -= bulls

    let solution = bulls + "A" + cows + "B"

    return solution
    
};
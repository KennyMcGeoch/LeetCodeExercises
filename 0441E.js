/**
 * @param {number} n
 * @return {number}
Runtime: 151 ms, faster than 27.49% of JavaScript online submissions for Arranging Coins.
Memory Usage: 44.6 MB, less than 25.14% of JavaScript online submissions for Arranging Coins.
 */
 var arrangeCoins = function(n) {

    let startNum = parseInt(Math.sqrt(2*n));
    let solution = startNum;
    let coinsInRow = 0

    for (i=startNum; i!==0; i++){
        coinsInRow = (i+1) * (i/2)
        if (coinsInRow < n){
            solution++
        }
        else if (coinsInRow === n){
            return solution
        }
        else {
            solution--
            return solution
        }
    }
    return   
};

arrangeCoins(353)

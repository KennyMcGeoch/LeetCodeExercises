/**
 * @param {number} n
 * @return {number}
 * Runtime: 160 ms, faster than 18.51% of JavaScript online submissions for Arranging Coins.
Memory Usage: 44.5 MB, less than 25.14% of JavaScript online submissions for Arranging Coins.
 */
 var arrangeCoins = function(n) {

    let startNum = parseInt(Math.sqrt(n));
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

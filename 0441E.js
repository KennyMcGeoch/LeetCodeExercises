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
        console.log(i + "i")
        coinsInRow = (i+1) * (i/2)
        console.log(coinsInRow)
        if (coinsInRow < n){
            solution++
        }
        else if (coinsInRow === n){
            console.log(solution)
            return solution
        }
        else {
            solution--
            console.log(solution)
            return solution
        }

    }


    return
    
};

arrangeCoins(353)

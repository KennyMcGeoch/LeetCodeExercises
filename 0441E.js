/**
 * @param {number} n
 * @return {number}
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
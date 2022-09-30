/**
 * @param {number} n
 * @return {number}
 * Runtime: 83 ms, faster than 65.98% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
 * Memory Usage: 42.4 MB, less than 28.81% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
 */
 var subtractProductAndSum = function(n) {

    let iterations = n.toString().length

    let digitA = parseInt(n/10000)
    let digitB = parseInt((n % 10000)/1000)
    let digitC = parseInt((n % 1000)/100)
    let digitD = parseInt((n % 100)/10)
    let digitE = n % 10

    let sumArray = [digitE,digitD,digitC,digitB,digitA]

    let sum = sumArray.reduce((partialSum, a) => partialSum + a, 0)
    let mult = 1
    
    for (i=0; i<iterations; i++){
        mult *= sumArray[i]
    }

    return mult - sum    
};
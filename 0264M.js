/**
 * @param {number} n
 * @return {number}
 * Runtime: 2698 ms, faster than 6.10% of JavaScript online submissions for Ugly Number II.
 * Memory Usage: 50.3 MB, less than 13.41% of JavaScript online submissions for Ugly Number II.
 */
 var nthUglyNumber = function(n) {

    let uglyArr = [1]
    let twoX = 0
    let threeX = 0
    let fiveX = 0

    for (i=0; i<n; i++){
        twoX = uglyArr[i] * 2
        threeX = uglyArr[i] * 3
        fiveX = uglyArr[i] * 5
        if (uglyArr.includes(twoX) === false)uglyArr.push(twoX)
        if (uglyArr.includes(threeX) === false)uglyArr.push(threeX)
        if (uglyArr.includes(fiveX) === false)uglyArr.push(fiveX)
        uglyArr.sort((a,b)=>a-b)
    }

    return uglyArr[n-1]
    
};
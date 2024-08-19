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

/**
 * @param {number} n
 * @return {number}
 * Runtime: 93 ms, faster than 20.17% of JavaScript online submissions for Ugly Number II.
 * Memory Usage: 55.1 MB, less than 20.17% of JavaScript online submissions for Ugly Number II.
 */
let uglyArr = [1]
    let twoX = 0
    let threeX = 0
    let fiveX = 0

    for (i=0; i<1690; i++){
        twoX = uglyArr[i] * 2
        threeX = uglyArr[i] * 3
        fiveX = uglyArr[i] * 5
        if (uglyArr.includes(twoX) === false)uglyArr.push(twoX)
        if (uglyArr.includes(threeX) === false)uglyArr.push(threeX)
        if (uglyArr.includes(fiveX) === false)uglyArr.push(fiveX)
        uglyArr.sort((a,b)=>a-b)
    }

 var nthUglyNumber = function(n) {

    return uglyArr[n-1]
    
};

/**
 * @param {number} n
 * @return {number}
 * Runtime: 54 ms, faster than 90.55% of JavaScript online submissions for Ugly Number II.
 * Memory Usage: 50.5 MB, less than 89.76% of JavaScript online submissions for Ugly Number II.
 */
let uglySet = new Set()

function recur(num, ops){
    if (ops > 30) return
    if (uglySet.has(num)) return
    uglySet.add(num)
    recur(num*2, ops+1)
    recur(num*3, ops+1)
    recur(num*5, ops+1)
    return
}
recur(1,0)
uglyArr = [...uglySet].sort((a,b)=>a-b)

 var nthUglyNumber = function(n) {

    return uglyArr[n-1]
    
};
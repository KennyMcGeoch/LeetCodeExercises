/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 * Runtime: 47 ms, faster than 83.21% of JavaScript online submissions for Compare Version Numbers.
 * Memory Usage: 48.3 MB, less than 87.40% of JavaScript online submissions for Compare Version Numbers.
 */
var compareVersion = function(version1, version2) {
    
    let arrOne = version1.split(".")
    let arrTwo = version2.split(".")
    for (let i=0; i<arrOne.length;i++) arrOne[i] = Number(arrOne[i])
    for (let i=0; i<arrTwo.length;i++) arrTwo[i] = Number(arrTwo[i])

    if (arrOne.length < arrTwo.length) lenAdd(arrOne,arrTwo.length)
    else if (arrTwo.length < arrOne.length) lenAdd(arrTwo, arrOne.length)
    
    for (let i=0; i<arrOne.length; i++){
        if (arrOne[i] < arrTwo[i]) return -1
        else if (arrTwo[i] < arrOne[i]) return 1
    }
    
    function lenAdd(left,right){
        while (left.length < right)left.push(0)
    }
    
    return 0
    
};
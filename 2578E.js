/**
 * @param {number} num
 * @return {number}
 * Runtime: 68 ms, faster than 15.08% of JavaScript online submissions for Split With Minimum Sum.
 * Memory Usage: 41.7 MB, less than 92.13% of JavaScript online submissions for Split With Minimum Sum.
 */
var splitNum = function(num) {
    
    num = num.toString()
    let numLen = num.length
    let numArr = []

    for (i=0; i<numLen; i++){
        numArr.push(num[i])
    }
    numArr.sort((a,b)=> a-b)

    let numOne = ""
    let numTwo = ""

    for (i=0; i<numLen; i++){
        if (i%2 === 0){
            numOne += numArr[i]
        }
        else{
            numTwo += numArr[i]
        }
    }

    return parseInt(numOne) + parseInt(numTwo)
    
};
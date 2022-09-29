/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 103 ms, faster than 53.66% of JavaScript online submissions for Longer Contiguous Segments of Ones than Zeros.
 * Memory Usage: 42 MB, less than 89.43% of JavaScript online submissions for Longer Contiguous Segments of Ones than Zeros.
 */
 var checkZeroOnes = function(s) {

    let nums = s.split("");
    let countOne = 0
    let countZero = 0
    let maxCountOne = 0
    let maxCountZero = 0
    let iterations = nums.length

    for (i=0; i<iterations; i++){
        if (nums[i] === "1"){
            countZero = 0
            countOne++
            if (countOne>maxCountOne){
                maxCountOne = countOne
            }
        }
        else{
            countOne = 0
            countZero++
            if (countZero>maxCountZero){
                maxCountZero = countZero
            }
        }
    }

    if (maxCountOne > maxCountZero){
        return true
    }

    return false
};

checkZeroOnes("1101")
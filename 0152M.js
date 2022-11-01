/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 88 ms, faster than 78.22% of JavaScript online submissions for Maximum Product Subarray.
 * Memory Usage: 44.8 MB, less than 11.00% of JavaScript online submissions for Maximum Product Subarray.
 */
 var maxProduct = function(nums) {

    let iterations = nums.length
    let solution = null
    let zeroSplitter = [[]]
    let zeros = 0

    if (iterations === 1)return nums[0]
    
    for (i=0; i<iterations; i++){
        if (nums[i] !== 0){
            zeroSplitter[zeros].push(nums[i])
        }
        else{
            solution = 0
            if (zeroSplitter[zeros].length > 0) {
                zeros++
                zeroSplitter[zeros] = []
            }            
        }
    }

    for (j=0; j<zeroSplitter.length; j++){
        let tempVal = maxRow(zeroSplitter[j])
        if (solution === null) solution = tempVal
        else solution = Math.max(solution, tempVal)
    }

    function maxRow(arr){
        let tempResults = []
        let arrLength = arr.length
        if (arrLength < 1) return null
        else if (arrLength === 1)return arr[0]
        let arrLengthM = arrLength - 1
        let result = {0:arr[0]}
        let firstNeg = -1
        if (arr[0] < 0) firstNeg = 0
        let lastNeg = -1
        for (i=1; i<arrLength; i++){
            result[i] = result[i-1] * arr[i]
            if (arr[i] < 0){
                if (firstNeg === -1) firstNeg = i
                else lastNeg = i
            }
        }
        if (result[arrLengthM] > 0)return result[arrLengthM]

        if (lastNeg !== firstNeg && lastNeg !== -1) tempResults.push(result[lastNeg-1],result[lastNeg]/result[firstNeg])
        if (firstNeg > 0) tempResults.push(result[firstNeg], result[firstNeg-1])
        else if (firstNeg === 0)tempResults.push(result[firstNeg])
        if (lastNeg < arrLengthM && lastNeg !== -1)tempResults.push(result[lastNeg+1]/result[firstNeg])
        if (firstNeg < arrLengthM)tempResults.push(result[arrLengthM]/result[firstNeg])        

        tempResults.sort((a,b)=> b-a)

        return tempResults[0]
    }

    return solution
    
};
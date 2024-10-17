/**
 * @param {number} num
 * @return {number}
 * Runtime: 0 ms, faster than 100.00% of JavaScript online submissions for Maximum Swap.
 * Memory Usage: 48.7 MB, less than 69.69% of JavaScript online submissions for Maximum Swap.
 */
var maximumSwap = function(num) {
    let str = num.toString()
    let max = new Array(str.length)
    let arr = str.split("")
    
    max[max.length-1] = arr[arr.length-1]
    for (let i=str.length-2; i>-1; i--){
        max[i] = Math.max(max[i+1],arr[i])
    }

    for (let i=0; i<arr.length; i++){
        if (arr[i] < max[i]){
            let maxInd = max.length-1
            while (max[maxInd] != max[i]) maxInd--
            let temp = arr[i]
            arr[i] = arr[maxInd]
            arr[maxInd] = temp
            return Number(arr.join(""))
        }
    }
    
    
    return num
};
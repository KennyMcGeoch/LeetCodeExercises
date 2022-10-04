/**
 * @param {number[]} arr
 * @return {number}
 * Runtime: 93 ms, faster than 68.76% of JavaScript online submissions for Sum of All Odd Length Subarrays.
 * Memory Usage: 42.4 MB, less than 48.20% of JavaScript online submissions for Sum of All Odd Length Subarrays.
 */
 var sumOddLengthSubarrays = function(arr) {

    let numberOfOddRows = Math.ceil(arr.length/2)
    let count = 0
    let subtractorArray = [0]
    let iterations = arr.length
    let multiplier = 0
    let lengthOdd = arr.length % 2

    if (iterations === 1){
        return arr[0]
    }
    else if (iterations === 2){
        return arr[0] + arr[1]
    }
    else{
        count = (arr[0] * numberOfOddRows) 
    }

    if (lengthOdd === 1){
        subtractorArray[1] = 2
        count+= (arr[1] * ((numberOfOddRows * 2)-2))
        for (i=2; i<iterations; i++){
            subtractorArray[i] = subtractorArray[i-2] + (2*i)
            multiplier = ((i+1) * numberOfOddRows) - subtractorArray[i]
            count += (arr[i] * multiplier)
    
        }
    }
    else{
        for (i=1; i<iterations; i++){
            subtractorArray[i] = subtractorArray[i-1] + i
            multiplier = ((i+1) * numberOfOddRows) - subtractorArray[i]
            count += (arr[i] * multiplier)
    
        }
    }
    return count
};
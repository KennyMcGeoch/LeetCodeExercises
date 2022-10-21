/**
 * @param {number[]} arr
 * @return {number}
 * Runtime: 102 ms, faster than 74.78% of JavaScript online submissions for Peak Index in a Mountain Array.
 * Memory Usage: 51.7 MB, less than 16.41% of JavaScript online submissions for Peak Index in a Mountain Array.
 */
 var peakIndexInMountainArray = function(arr) {

    let min = 0
    let max = arr.length - 1
    let iteration = parseInt((max-min)/2)

    while(true){
        if (arr[iteration] > arr[iteration-1] && arr[iteration] > arr[iteration+1])return iteration

        if (arr[iteration] < arr[iteration-1]){
            max = iteration - 1
        }
        else{
            min = iteration + 1
        }
        iteration = min + parseInt((max-min)/2)
    }
    
};
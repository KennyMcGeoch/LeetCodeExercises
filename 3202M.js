/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 52ms Beats 100.00%
 * Memory 58.72MB Beats 100.00%
 */
var maximumLength = function(nums, k) {
    let ans = 2
    let arr = new Array(k)
    for (let i=0; i<arr.length; i++) arr[i] = []

    for (let i=0; i<nums.length; i++) arr[nums[i]%k].push(i)

    for (let i=0; i<arr.length; i++){
        if (arr[i].length){
            ans = Math.max(ans, arr[i].length)
            for (let j=i+1; j<arr.length; j++){
                if (arr[j].length){
                    if (arr[i][0] < arr[j][0]) check(arr[i],arr[j])
                    else check(arr[j],arr[i])
                }
            }
        }
    }

    function check(arr1, arr2){
        let count = 0
        let val1 = 0
        let val2 = 0
        while(val1 < arr1.length && val2 < arr2.length){
            if (arr1[val1] < arr2[val2]){
                count++
                while(arr1[val1] < arr2[val2]) val1++
            }
            if (arr2[val2] < arr1[val1]){
                count++
                while(arr2[val2] < arr1[val1]) val2++
            }
        }
        if (val1 < arr1.length && arr1[val1] > arr2[arr2.length-1]) count++
        if (val2 < arr2.length && arr2[val2] > arr1[arr1.length-1]) count++
        ans = Math.max(ans,count)
        return
        
    }
    return ans
};
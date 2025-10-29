/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 * Runtime 429ms Beats 60.00%
 * Memory 94.56MB Beats 60.00%
 */
var maxFrequency = function(nums, k, numOperations) {
    if (nums.length === 1) return 1
    let max = Math.max(...nums)
    let arr = {}
    let set = new Set()
    let min = 0
    max = 0
    let ans = 1
    let minInd = 0
    let maxInd = 0
    let lmin = 0
    let lmax = 0
    let lInd = 0
    let maxTwo = 0
    let maxIndTwo = 0
    let minTwo = 0
    let minIndTwo = 0
    
    for (let i=0; i<nums.length; i++){ 
        arr[nums[i]] = (arr[nums[i]] || 0) + 1
        set.add(nums[i])
        }
    set = Array.from(set).sort((a,b)=>a-b)
    for (let i=0; i<set.length; i++){
        if (i){
            while(set[minInd] < set[i-1]) min += arr[set[minInd++]]
            while (set[maxInd] < set[i-1]+k+k+1) max += arr[set[maxInd++]]
        }
        else{
            while (set[maxInd] < set[i]+k+k+1) max += arr[set[maxInd++]]
        }
        if (i){
            while(set[lInd] < set[i]-k) lmin += arr[set[lInd++]]
            lmax += arr[set[i-1]]
        }
        ans = Math.max(ans, Math.min(numOperations, lmax-lmin) + arr[set[i]])

        ans = Math.max(ans, Math.min(numOperations, max-min))
        while(set[minIndTwo] < set[i]-k){
            minTwo += arr[set[minIndTwo++]]
        }
        while(set[maxIndTwo] <= set[i]+k && maxIndTwo < set.length){
            maxTwo += arr[set[maxIndTwo++]]
        }
        ans = Math.max(ans, arr[set[i]] + Math.min(numOperations, maxTwo-minTwo-arr[set[i]]))
        
    }

    return ans
};
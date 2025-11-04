/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 * Runtime 13ms Beats 83.78%
 * Memory 59.62MB Beats 100.00%
 */
var findXSum = function(nums, k, x) {
    let arr = new Array(51).fill(0)
    let sortArr = new Array(50)
    for (let i=0; i<50; i++) sortArr[i] = i+1
    let curr = 0
    let val = 0
    let ans = []
    let total
    for (let i=0; i<k; i++){
        if (arr[nums[i]]++ === 0) curr++
        val += nums[i]
    }
    for (let i=k; i<=nums.length; i++){
        if (curr <= x) ans.push(val)
        else calcX(i)
        if (arr[nums[i]]++ === 0) curr++
        if (arr[nums[i-k]]-- === 1) curr--
        val += nums[i]
        val -= nums[i-k]
    }

    function calcX(ind){
        sortArr.sort((a,b)=>{
            if (arr[a] !== arr[b]) return arr[b]-arr[a]
            else return b-a
        })
        total = 0
        for (let j=0; j<x; j++){
            total += (sortArr[j] * arr[sortArr[j]])
        }
        ans.push(total)
        return
    }

    return ans

};

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 * Runtime 12ms Beats 89.19%
 * Memory 59.75MB Beats 100.00%
 */
var findXSum = function(nums, k, x) {
    let arr = new Array(51).fill(0)
    let tempArr = []
    let sortArr = new Array(50)
    for (let i=0; i<50; i++) sortArr[i] = i+1
    let curr = 0
    let val = 0
    let ans = []
    let total
    for (let i=0; i<k; i++){
        if (arr[nums[i]]++ === 0) curr++
        val += nums[i]
    }
    for (let i=k; i<=nums.length; i++){
        if (curr <= x) ans.push(val)
        else calcX(i)
        if (arr[nums[i]]++ === 0) curr++
        if (arr[nums[i-k]]-- === 1) curr--
        val += nums[i]
        val -= nums[i-k]
    }

    function calcX(ind){
        tempArr = sortArr.filter(a => arr[a]).sort((a,b)=>{
            if (arr[a] !== arr[b]) return arr[b]-arr[a]
            else return b-a
        })
        total = 0
        for (let j=0; j<x && j<tempArr.length; j++){
            total += (tempArr[j] * arr[tempArr[j]])
        }
        ans.push(total)
        return
    }

    return ans

};
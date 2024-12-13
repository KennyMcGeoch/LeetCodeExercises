/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 214 ms, faster than 93.33% of JavaScript online submissions for Find Score of an Array After Marking All Elements.
 * Memory Usage: 79 MB, less than 88.24% of JavaScript online submissions for Find Score of an Array After Marking All Elements.
 */
var findScore = function(nums) {
    let order = new Array(nums.length)
    for (let i=0; i<order.length; i++) order[i] = i
    order.sort((a,b)=>{
        if (nums[a] !== nums[b]) return nums[b]-nums[a]
        else return b-a
    })
    let hash = new Set()
    let ans = 0
    
    while(order.length){
        if (hash.has(order[order.length-1])) order.pop()
        else{
            ans += nums[order[order.length-1]]
            hash.add(order[order.length-1])
            hash.add(order[order.length-1]+1)
            hash.add(order[order.length-1]-1)
            order.pop()
        }
    }
    return ans
};
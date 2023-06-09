/**
* @param {number[]} nums
* @return {number}
* Runtime: 57 ms, faster than 80.17% of JavaScript online submissions for Count Elements With Strictly Smaller and Greater Elements .
* Memory Usage: 42.2 MB, less than 70.69% of JavaScript online submissions for Count Elements With Strictly Smaller and Greater Elements .
*/
var countElements = function(nums) {
   nums.sort((a,b)=>a-b)
   let loops = nums.length - 1
   min = 0
   max = 0
   for (let i=1; i<loops; i++){
       if (nums[i] > nums[0]){
           min = i
           i = loops--
       }
   }
   for (i=loops; i>0; i--){
       if (nums[i] < nums[i+1]){
           max = i + 1
           i = 0
       }
   }
   if (max === 0 || min === 0) return 0
   
   return max-min
   
   
};
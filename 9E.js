/**
 * @param {number} x
 * @return {boolean}
 * Runtime: 345 ms, faster than 21.11% of JavaScript online submissions for Palindrome Number.
Memory Usage: 50.5 MB, less than 82.76% of JavaScript online submissions for Palindrome Number.
 */
 var isPalindrome = function(x) {
    x = x.toString()

   if (x.length < 2){
       return true
   }
   let testLength = x.length - 1
   let k=0
   while (k < testLength){
       if (x[k++] !== x[testLength--]){
           return false
       }

   }
   return true
};
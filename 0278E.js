/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * Runtime: 77 ms, faster than 76.23% of JavaScript online submissions for First Bad Version.
 * Memory Usage: 42.7 MB, less than 5.37% of JavaScript online submissions for First Bad Version.
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let minValue = 0
        let maxValue = n
        let testVal = parseInt((n+1)/2)
        while(minValue !== maxValue){
            if (isBadVersion(testVal) === false){
                minValue = testVal + 1
            }
            else{
                maxValue = testVal
            }
            testVal = parseInt((maxValue-minValue)/2) + minValue
        }
        return minValue        
    };
};
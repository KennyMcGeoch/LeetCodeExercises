/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 * Runtime 57ms Beats 70.27%
 * Memory 53.09MB Beats 100.00%
 */
var countPrimeSetBits = function(left, right) {
    let ans = 0
    let temp = 0
    let arr = [0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0]
    for (let i=left; i<=right; i++){
        ans += (check(i))
    }

    function check(i){
        temp = 0
        while(i > 0){
            if (i % 2 === 1) temp++
            i = Math.floor(i/2)
        }
        return arr[temp]
    }

    return ans
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 * Runtime 15ms Beats 75.68%
 * Memory 56.03MB Beats 67.57%
 */
var countPrimeSetBits = function(left, right) {
    let ans = 0
    let temp = 0
    let arr = new Set([2,3,5,7,11,13,17,19])
    for (let i=left; i<=right; i++){
        ans += (check(i))
    }

    function check(i){
        temp = 0
        while(i){
            i &= (i-1)
            temp++
        }
        return arr.has(temp)
    }

    return ans
};
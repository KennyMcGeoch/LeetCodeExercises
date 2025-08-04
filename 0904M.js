/**
 * @param {number[]} fruits
 * @return {number}
 * Runtime 77ms Beats 24.16%
 * Memory 67.84MB Beats 68.08%

 */
var totalFruit = function(fruits) {

    if (fruits.length < 3) return fruits.length

    let arr = {}
    let total = 0
    let ans = 0
    let len = fruits.length
    let left = 0
    let right = 0

    while(right < len){
        while(total < 3 && right < len){
            if (arr[fruits[right]] === undefined || arr[fruits[right]] === 0){
                arr[fruits[right]] = 1
                total++
            }
            else arr[fruits[right]]++
            right++
        }
        ans = Math.max(ans, right-left-1)
        while(total === 3){
            if (arr[fruits[left++]]-- === 1) total--
        }
    }
    if (total < 3 && right - left > ans) ans++

    return ans
    
};

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {

    let set = new Set(fruits)
    if (set.size < 3) return fruits.length

    let arr = {}
    let total = 0
    let ans = 0
    let len = fruits.length
    let left = 0
    let right = 0

    while(right < len){
        while(total < 3 && right < len){
            if (arr[fruits[right]] === undefined || arr[fruits[right]] === 0){
                arr[fruits[right]] = 1
                total++
            }
            else arr[fruits[right]]++
            right++
        }
        ans = Math.max(ans, right-left-1)
        while(total === 3){
            if (arr[fruits[left++]]-- === 1) total--
        }
    }
    if (total < 3 && right - left > ans) ans++

    return ans
    
};
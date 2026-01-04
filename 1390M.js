/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 554ms Beats 8.82%
 * Memory 58.54MB Beats 61.76%
 */

 let sieve = new Array(50000).fill(1)
 let primes = []
 sieve[0] = 0
 sieve[1] = 0
 for (let i=2; i<50001; i++){
    if (sieve[i]){
        for (let j=i*2; j<50001; j+=i) sieve[j] = 0
    }
 }
 for (let i=0; i<50001; i++){
    if (sieve[i]) primes.push(i)
 }

var sumFourDivisors = function(nums) {
    let ans = 0
    
    function calc(target){
        let left = 0
        let right = 5132

        while(right > left){
            if (primes[left] * primes[right] === target) return primes[left] + primes[right] + target + 1
            else if (primes[left] * primes[right] < target) left++
            else right--
        }
        return 0
    }

    for (let i=0; i<nums.length; i++){
        if (primes.includes(Math.cbrt(nums[i]))){
             ans += (nums[i] + 1 + Math.cbrt(nums[i]) + (Math.cbrt(nums[i]) * Math.cbrt(nums[i])))
        }
        else ans += calc(nums[i])
    }

    return ans
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 526ms Beats 8.82%
 * Memory 59.47MB Beats 61.76%
 */

 sieve = new Array(50000).fill(1)
 primes = []
 sieve[0] = 0
 sieve[1] = 0
 for (let i=2; i<50001; i++){
    if (sieve[i]){
        for (let j=i*2; j<50001; j+=i) sieve[j] = 0
    }
 }
 for (let i=0; i<50001; i++){
    if (sieve[i]) primes.push(i)
 }

var sumFourDivisors = function(nums) {
    let ans = 0
    
    function calc(target){
        let left = 0
        let right = 5132
        let binleft = 0
        let cand

        while (primes[right] > target){
            cand = Math.ceil(((right-binleft)/2) + binleft)
            if (primes[cand] < target) binleft = cand+1
            else right = cand -1
        }

        while(right > left){
            if (primes[left] * primes[right] === target) return primes[left] + primes[right] + target + 1
            else if (primes[left] * primes[right] < target) left++
            else right--
        }
        return 0
    }

    for (let i=0; i<nums.length; i++){
        if (primes.includes(Math.cbrt(nums[i]))){
             ans += (nums[i] + 1 + Math.cbrt(nums[i]) + (Math.cbrt(nums[i]) * Math.cbrt(nums[i])))
        }
        else ans += calc(nums[i])
    }

    return ans
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 44ms Beats 23.53%
 * Memory 62.91MB Beats 14.71%
 */

var sumFourDivisors = function(nums) {
    let ans = 0
    let arr = []
    
    for (let i=0; i<nums.length; i++){
        arr = []
        for (j=1; j*j <= nums[i]; j++){
            if (nums[i] % j === 0){
                arr.push(j)
                if (j*j !== nums[i]) arr.push(nums[i]/j)
            }
        }
        if (arr.length === 4) ans += arr.reduce((a,b)=>a+b)
    }

    return ans
    
};
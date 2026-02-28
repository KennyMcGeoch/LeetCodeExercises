/**
 * @param {number} n
 * @return {number}
 * Runtime 1461ms Beats 0.00%
 * Memory 81.69MB Beats 0.00%
 */
var concatenatedBinary = function(n) {
    let str = ""
    let mult = 1
    let ans = 0

    for (let i=1; i<=n; i++) str += i.toString(2)

    for (let i=str.length-1; i>-1; i--){
        ans += (str[i] * mult)
        ans %= 1000000007
        mult *= 2
        mult %= 1000000007
    }

    return ans
};

/**
 * @param {number} n
 * @return {number}
 * Runtime 1123ms Beats 0.00%
 * Memory 61.47MB Beats 33.33%
 */
var concatenatedBinary = function(n) {
    let temp = ""
    let mult = 1
    let ans = 0

    for (let i=n; i>0; i--){ 
        temp = i.toString(2)
        for (let j=temp.length-1; j>-1; j--){
            ans += (temp[j] * mult)
            ans %= 1000000007
            mult *= 2
            mult %= 1000000007
        }
    }

    return ans
};

/**
 * @param {number} n
 * @return {number}
 * Runtime 419ms Beats 66.67%
 * Memory 53.99MB Beats 66.67%
 */
var concatenatedBinary = function(n) {
    let temp = 0
    let mult = 1
    let ans = 0

    for (let i=n; i>0; i--){ 
        temp = i
        while (temp){
            ans += ((temp%2) * mult)
            ans %= 1000000007
            mult *= 2
            mult %= 1000000007
            temp = Math.floor(temp/2)
        }
    }

    return ans
};
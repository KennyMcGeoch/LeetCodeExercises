/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 58.16MB Beats 90.32%
 */

 let hash = new Array(100001)
 let curr = ""
hash[100] = 0

for (let i=101; i<100001; i++){
    hash[i] = hash[i-1]
    curr = i.toString()
    for (let j=1; j<curr.length-1; j++){
        if (curr[j] > curr[j-1]){
            if (curr[j] > curr[j+1]) hash[i]++
        }
        else if (curr[j] < curr[j-1]){
            if (curr[j] < curr[j+1]) hash[i]++
        }
    }
}
var totalWaviness = function(num1, num2) {
    return hash[Math.max(num2, 100)] - hash[Math.max(num1-1,100)]
};
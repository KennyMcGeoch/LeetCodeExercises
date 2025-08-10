/**
 * @param {number} n
 * @return {boolean}
 * Runtime 36ms Beats 33.33%
 * Memory 54.77MB Beats81.48%
 */
var reorderedPowerOf2 = function(n) {
    let arr = new Array(10).fill(0)
    let valid = false
    n = n.toString()
    for (let i=0; i<n.length; i++)arr[n[i]]++

    if (arr[1]) recur(arr[0],arr[1]-1,arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],1,1)
    if (arr[2]) recur(arr[0],arr[1],arr[2]-1,arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],2,1)
    if (arr[3]) recur(arr[0],arr[1],arr[2],arr[3]-1,arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],3,1)
    if (arr[4]) recur(arr[0],arr[1],arr[2],arr[3],arr[4]-1,arr[5],arr[6],arr[7],arr[8],arr[9],4,1)
    if (arr[5]) recur(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]-1,arr[6],arr[7],arr[8],arr[9],5,1)
    if (arr[6]) recur(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6]-1,arr[7],arr[8],arr[9],6,1)
    if (arr[7]) recur(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]-1,arr[8],arr[9],7,1)
    if (arr[8]) recur(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8]-1,arr[9],8,1)
    if (arr[9]) recur(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]-1,9,1)
    
    function recur(num0,num1,num2,num3,num4,num5,num6,num7,num8,num9,total,ind){
        if (valid) return
        if (ind === n.length){
            if (1073741824 % total == 0) valid = true
            return
        }
        total *= 10
        if (num0) recur(num0-1,num1,num2,num3,num4,num5,num6,num7,num8,num9,total,ind+1)
        if (num1) recur(num0,num1-1,num2,num3,num4,num5,num6,num7,num8,num9,total+1,ind+1)
        if (num2) recur(num0,num1,num2-1,num3,num4,num5,num6,num7,num8,num9,total+2,ind+1)
        if (num3) recur(num0,num1,num2,num3-1,num4,num5,num6,num7,num8,num9,total+3,ind+1)
        if (num4) recur(num0,num1,num2,num3,num4-1,num5,num6,num7,num8,num9,total+4,ind+1)
        if (num5) recur(num0,num1,num2,num3,num4,num5-1,num6,num7,num8,num9,total+5,ind+1)
        if (num6) recur(num0,num1,num2,num3,num4,num5,num6-1,num7,num8,num9,total+6,ind+1)
        if (num7) recur(num0,num1,num2,num3,num4,num5,num6,num7-1,num8,num9,total+7,ind+1)
        if (num8) recur(num0,num1,num2,num3,num4,num5,num6,num7,num8-1,num9,total+8,ind+1)
        if (num9) recur(num0,num1,num2,num3,num4,num5,num6,num7,num8,num9-1,total+9,ind+1)
        return
    }

    return valid 
};

/**
 * @param {number} n
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 53.01MB Beats 100.00%
 */
let valid = new Set()
let temp
for (let i=0; i<32; i++){
   temp = 2 ** i
   temp = temp.toString().split("").sort().join("")
   valid.add(temp)
}
var reorderedPowerOf2 = function(n) {
   n = n.toString().split("").sort().join("")
   return valid.has(n)
};
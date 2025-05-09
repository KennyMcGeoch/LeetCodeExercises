/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 * Runtime 45ms Beats 86.31%
 * Memory 53.64MB Beats 86.01%
 */
var countGoodTriplets = function(arr, a, b, c) {
    let ans = 0

    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if (Math.abs(arr[i]-arr[j])<= a){
                for (let k=j+1; k<arr.length; k++){
                if (Math.abs(arr[j]-arr[k])<= b && Math.abs(arr[i]-arr[k])<= c) ans++
            }
            }
        }
    }

    return ans
};
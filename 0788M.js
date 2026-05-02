/**
 * @param {number} n
 * @return {number}
 * Runtime 0ms Beats 100.00% 
 * Memory 54.07MB Beats 87.72%
 */
 let arr = new Array(10001)
 let curr = 0
 let invalid = new Set([3,4,7])
 let valid = new Set([2,5,6,9])
for (let i=0; i<10; i++){
    for (let j=0; j<10; j++){
        for (let k=0; k<10; k++){
            for (let l=0; l<10; l++){
                if (invalid.has(i) || invalid.has(k) || invalid.has(j) || invalid.has(l)) arr[(i*1000) + (j*100) + (k*10) + l] = curr
                else if (valid.has(i) || valid.has(k) || valid.has(j) || valid.has(l)) arr[(i*1000) + (j*100) + (k*10) + l] = ++curr
                else arr[(i*1000) + (j*100) + (k*10) + l] = curr
            }
        }
    }
}

arr[10000] = curr


var rotatedDigits = function(n) {
    return arr[n]
};
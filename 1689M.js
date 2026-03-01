/**
 * @param {string} n
 * @return {number}
 * Runtime 6ms Beats 96.77%
 * Memory 58.35MB Beats 95.16%
 */
var minPartitions = function(n) {
    let ans = "0"
    n = n.toString()
    for (let i=0; i<n.length; i++){
        if (n[i] > ans){
            ans = n[i]
            if (ans === "9") return 9
        }
    }

    return Number(ans)
};

/**
 * @param {string} n
 * @return {number}
 * Runtime 8ms Beats 87.10%
 * Memory 56.79MB Beats 100.00%
 */
var minPartitions = function(n) {
    let ans = "0"
    for (let i=0; i<n.length; i++){
        if (n[i] > ans){
            ans = n[i]
            if (ans === "9") return 9
        }
    }

    return Number(ans)
};
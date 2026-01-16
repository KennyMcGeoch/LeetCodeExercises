/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 * Runtime 487ms Beats 80.00%
 * Memory 87.43MB Beats 86.67%
 */
var maximizeSquareArea = function(m, n, hFences, vFences) {
    if (m === n) return ((n-1) ** 2) % 1000000007

    let vSet = new Set()
    let hSet = new Set()

    vSet.add(n-1)

    for (let i=0; i<vFences.length; i++){
        vSet.add(vFences[i]-1)
        vSet.add(n - vFences[i])
        for (let j=i+1; j<vFences.length; j++){
            vSet.add(Math.abs(vFences[i]-vFences[j]))
        }
    }

    if (vSet.has(m-1)) return ((m-1) ** 2) % 1000000007

    for (let i=0; i<hFences.length; i++){
        if (vSet.has(hFences[i]-1)) hSet.add(hFences[i]-1)
        if (vSet.has(m-hFences[i])) hSet.add(m-hFences[i])
        for (let j=i+1; j<hFences.length; j++){
            if (vSet.has(Math.abs(hFences[i]-hFences[j]))) hSet.add(Math.abs(hFences[i]-hFences[j])) 
        }
    }
    let max = 0
    hSet.forEach((a)=> max = Math.max(max,a))
    if (max === 0) return -1
    max = BigInt(max)
    max *= max
    max %= 1000000007n

   return Number(max)

};
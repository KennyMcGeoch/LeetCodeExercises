/**
 * @param {number[][]} points
 * @return {number}
 * Runtime 205ms Beats 9.09%
 * Memory 108.39MB Beats 9.09%
 */
var countTrapezoids = function(points) {
    let hash = {}
    let ans = 0
    for (let i=0; i<points.length; i++) hash[points[i][1]] = (hash[points[i][1]] || 0) + 1
    hash = Object.values(hash)
    let total = 0
    if (Math.max(...hash) > 9500){
        ans = 0n
        total = 0n
        for (let i=0; i<hash.length; i++){
            hash[i] = BigInt(hash[i])
            hash[i] = (((hash[i]**2n)-hash[i])/2n) % 1000000007n
        }
        total += hash.reduce((a,b)=>a+b)
        for (let i=0; i<hash.length; i++){
            total -= hash[i]
            ans += hash[i] * total
            ans %= 1000000007n
        }
        return parseInt(ans)
    }
    for (let i=0; i<hash.length; i++) hash[i] = (((hash[i]**2)-hash[i])/2) % 1000000007
    total += hash.reduce((a,b)=>a+b)
    for (let i=0; i<hash.length; i++){
        total -= hash[i]
        ans += hash[i] * total
        ans %= 1000000007
    }
    return ans
    
};
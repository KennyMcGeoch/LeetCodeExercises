/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 * Runtime 10ms Beats100.00%
 * Memory 60.04MB Beats100.00%
 */
var maximumGain = function(s, x, y) {
    let aCount = 0
    let bCount = 0
    let ans = 0

    if (x > y){
        for (let i=0; i<s.length; i++){
            if (s[i] === "b"){
                if (aCount){
                    aCount--
                    ans += x
                }
                else bCount++
            }
            else if (s[i] === "a") aCount++
            else{
                ans += (Math.min(aCount,bCount)*y)
                aCount = 0
                bCount = 0
            }
        }
        ans += (Math.min(aCount,bCount)*y)
    }
    else{
        for (let i=0; i<s.length; i++){
            if (s[i] === "a"){
                if (bCount){
                    bCount--
                    ans += y
                }
                else aCount++
            }
            else if (s[i] === "b") bCount++
            else{
                ans += (Math.min(aCount,bCount)*x)
                aCount = 0
                bCount = 0
            }
        }
        ans += (Math.min(aCount,bCount)*x)
    }

    return ans
};
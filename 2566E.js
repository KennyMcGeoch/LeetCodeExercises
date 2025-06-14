/**
 * @param {number} num
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.78MB Beats 47.62%
 */
var minMaxDifference = function(num) {
    let ans = 0

    let temp = num.toString().split("")

    for (let i=0; i<temp.length; i++){
        if (temp[i] !== "9"){
            remap(temp[i], 9)
            ans += Number(temp.join(""))
            i = num.length
        }
    }

    if (ans === 0) ans += num

    temp = num.toString().split("")

    remap(temp[0],0)
    ans -= Number(temp.join(""))

    function remap(old,newDig){
        for (let i=0; i<temp.length; i++){
            if (temp[i] === old) temp[i] = newDig
        }
    }

    return ans

};
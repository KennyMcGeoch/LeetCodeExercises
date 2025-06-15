/**
 * @param {number} num
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 52.39MB Beats 96.30%
 */
var maxDiff = function(num) {
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

    if (temp[0] !== "1") remap(temp[0],1)
    else{
        for (let i=1; i<temp.length; i++){
            if (temp[i] > 1){
                remap(temp[i],0)
                i = temp.length
            }
        }
    }
    
    ans -= Number(temp.join(""))

    function remap(old,newDig){
        for (let i=0; i<temp.length; i++){
            if (temp[i] === old) temp[i] = newDig
        }
    }

    return ans
};
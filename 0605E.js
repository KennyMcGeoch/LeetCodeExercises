/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * Runtime: 111 ms, faster than 43.69% of JavaScript online submissions for Can Place Flowers.
Memory Usage: 43.9 MB, less than 84.70% of JavaScript online submissions for Can Place Flowers.
 */
 var canPlaceFlowers = function(flowerbed, n) {

    let zeroCount = 1
    let totalSpaces = 0
    let iterations = flowerbed.length

    for (i=0; i<iterations; i++){
        if(flowerbed[i] === 0){
            zeroCount++
        }
        else{
            totalSpaces += (parseInt((zeroCount-1)/2))
            zeroCount = 0
        }
    }

    totalSpaces += (parseInt((zeroCount)/2))

    if (totalSpaces < n){
        return false
    }

    return true    
};

canPlaceFlowers([1,0,0,0,0,0,1],1)
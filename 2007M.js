/**
 * @param {number[]} changed
 * @return {number[]}
 * Runtime: 932 ms, faster than 10.94% of JavaScript online submissions for Find Original Array From Doubled Array.
Memory Usage: 68.4 MB, less than 90.63% of JavaScript online submissions for Find Original Array From Doubled Array.
 */
 var findOriginalArray = function(changed) {

    let originalArray = [];
    changed = changed.sort(function(a, b){return a - b});
    let maxNumber = (changed[changed.length-1])
    changed = changed.sort(function(a, b){return a - b});
    let arrayCount = {};

    for (i=0; i<changed.length; i++){
        if (arrayCount[changed[i]] !== undefined){
            arrayCount[changed[i]] += 1
        }
        else{
            arrayCount[changed[i]] = 1;
        }
    }
    if (arrayCount[0] !== undefined && arrayCount[0] % 2 === 1 ){
        return []
    }
    for (i=0; i<maxNumber+1; i++){
        if(arrayCount[i] !== undefined){
            while(arrayCount[i]>0){
                if(arrayCount[i*2] === undefined || arrayCount[i*2] === 0){
                    return []
                }
                else{
                    originalArray.push(i)
                    arrayCount[i] -= 1;
                    arrayCount[i*2] -= 1;
                }
            }
        }

    }
     return originalArray
};

findOriginalArray([5,7,2,10,4,2,7,14])
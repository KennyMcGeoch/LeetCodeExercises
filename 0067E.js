/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * Runtime 0ms Beats 100.00%
 * Memory 54.68MB Beats 74.02%
 */
var addBinary = function(a, b) {
    let arr = new Array(Math.max(a.length, b.length)).fill(0)
    let carry = "0"
    for (let i=0; i<a.length; i++){
        arr[arr.length-(i+1)] = a[a.length-(i+1)]
    }
    for (let i=0; i<b.length; i++){
        if (b[b.length-(i+1)] === "1"){
            if (carry === "0"){
                if (arr[arr.length - (i+1)] === "1"){
                    arr[arr.length - (i+1)] = "0"
                    carry = "1"
                }
                else arr[arr.length - (i+1)] = "1"
            }
        }
        else if (arr[arr.length - (i+1)] === "1"){
            if (carry === "1"){
                arr[arr.length - (i+1)] = "0"
                carry = "1"
            }
        }
        else if (carry === "1"){
            arr[arr.length - (i+1)] = "1"
            carry = "0"
        }
    }
    if (b.length < a.length){
        let loop = a.length-b.length
        while(--loop > -1 && carry === "1"){
            if (arr[loop] === "1"){
                arr[loop] = "0"
            }
            else{
                arr[loop] = "1"
                carry = "0"
            }
        }
    }

    if (carry === "1") return carry + arr.join("")
    return arr.join("")
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (parseInt(a,2) + parseInt(b,2)).toString(2) // works for small numbers, fails to big ones
};
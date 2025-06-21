/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 * Runtime 10ms Beats 100.00%
 * 61.32MB Beats 26.09%
 */
var minimumDeletions = function(word, k) {
    let arr = new Array(26).fill(0)
    let ans = Infinity

    for (let i=0; i<word.length; i++) arr[word.charCodeAt(i)-97]++

    arr = arr.filter((a)=> a).sort((a,b)=>a-b)

    for (let i=0; i<arr.length; i++){
        check(arr[i])
    }

    function check(num){
        let curr = 0
        for (let j=0; j<arr.length; j++){
            if (arr[j] < num) curr += arr[j]
            else if (arr[j] > num + k) curr += (arr[j] - (num+k))
        }
        ans = Math.min(curr, ans)
    }

    return ans
};

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 * Runtime 15ms Beats 86.96%
 * Memory 60.46MB Beats 73.91%
 */
var minimumDeletions = function(word, k) {
    let arr = new Array(26).fill(0)
    let ans = Infinity

    for (let i=0; i<word.length; i++) arr[word.charCodeAt(i)-97]++

    arr = arr.filter((a)=> a).sort((a,b)=>a-b)

    for (let i=0; i<arr.length; i++){
        let curr = 0
        for (let j=0; j<arr.length; j++){
            if (arr[j] < arr[i]) curr += arr[j]
            else if (arr[j] > arr[i] + k) curr += (arr[j] - (arr[i]+k))
        }
        ans = Math.min(curr, ans)
    }

    return ans
};

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 * Runtime 11ms Beats 95.65%
 * 60.49MB Beats 73.91%

 */
var minimumDeletions = function(word, k) {
    let arr = new Array(26).fill(0)
    let ans = Infinity
    let curr = 0

    for (let i=0; i<word.length; i++) arr[word.charCodeAt(i)-97]++

    arr = arr.filter((a)=> a).sort((a,b)=>a-b)

    for (let i=0; i<arr.length; i++){
        curr = 0
        for (let j=0; j<arr.length; j++){
            if (arr[j] < arr[i]) curr += arr[j]
            else if (arr[j] > arr[i] + k) curr += (arr[j] - (arr[i]+k))
        }
        ans = Math.min(curr, ans)
    }

    return ans
};
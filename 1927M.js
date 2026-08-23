/**
 * @param {string} num
 * @return {boolean}
 * Runtime 11ms Beats 21.43%
 * Memory 57.83MB Beats 50.00%
 */
var sumGame = function(num) {
    let leftChange = 0
    let leftTot = 0
    let rightChange = 0
    let rightTot = 0

    for (let i=0; i<num.length/2; i++){
        if (num[i] === "?") leftChange++
        else leftTot += Number(num[i])
    }
    for (let i=num.length/2; i<num.length; i++){
        if (num[i] === "?") rightChange++
        else rightTot += Number(num[i])
    }

    if (leftChange === rightChange) return leftTot !== rightTot
    if ((leftChange + rightChange) % 2 === 1) return true

    while(leftChange && rightChange){
        leftChange--
        rightChange--
    }

    if (leftChange) return (rightTot - leftTot) !== (leftChange * 4.5)
    if (rightChange) return (leftTot - rightTot) !== (rightChange * 4.5)
};

/**
 * @param {string} num
 * @return {boolean}
 * Runtime 6ms Beats 78.57%
 * Memory 57.80MB Beats 50.00%
 */
var sumGame = function(num) {
    let leftChange = 0
    let leftTot = 0
    let rightChange = 0
    let rightTot = 0

    for (let i=0; i<num.length/2; i++){
        if (num[i] === "?") leftChange++
        else leftTot += Number(num[i])
    }
    for (let i=num.length/2; i<num.length; i++){
        if (num[i] === "?") rightChange++
        else rightTot += Number(num[i])
    }

    if (leftChange === rightChange) return leftTot !== rightTot
    if ((leftChange + rightChange) % 2 === 1) return true

    if (leftChange > rightChange){
        leftChange -= rightChange
        rightChange = 0
    }
    else{
        rightChange -= leftChange
        leftChange = 0
    }

    if (leftChange) return (rightTot - leftTot) !== (leftChange * 4.5)
    if (rightChange) return (leftTot - rightTot) !== (rightChange * 4.5)
};

/**
 * @param {string} num
 * @return {boolean}
 * Runtime 7ms Beats 71.43%
 * Memory 56.92MB Beats 85.71%
 */
var sumGame = function(num) {
    let change = 0
    let tot = 0

    for (let i=0; i<num.length/2; i++){
        if (num[i] === "?") change++
        else tot -= Number(num[i])
    }
    for (let i=num.length/2; i<num.length; i++){
        if (num[i] === "?") change--
        else tot += Number(num[i])
    }

    if (change === 0) return tot
    if (change % 2 !== 0) return true

    return tot !== (change * 4.5)

};

/**
 * @param {string} num
 * @return {boolean}
 * Runtime 6ms Beats 78.57%
 * Memory 56.48MB Beats 92.86%
 */
var sumGame = function(num) {
    let change = 0
    let tot = 0

    for (let i=0; i<num.length/2; i++){
        if (num[i] === "?") change++
        else tot -= num.charCodeAt(i) - 48
    }
    for (let i=num.length/2; i<num.length; i++){
        if (num[i] === "?") change--
        else tot += num.charCodeAt(i) - 48
    }

    if (change === 0) return tot
    if (change % 2 !== 0) return true

    return tot !== (change * 4.5)

};
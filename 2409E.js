/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.94MB Beats 9.68%
 */
 let month = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {

    let arr = Math.max((month[Number(arriveAlice.slice(0,2))] + Number(arriveAlice.slice(3))),(month[Number(arriveBob.slice(0,2))] + Number(arriveBob.slice(3))))
    let dep = Math.min((month[Number(leaveAlice.slice(0,2))] + Number(leaveAlice.slice(3))),(month[Number(leaveBob.slice(0,2))] + Number(leaveBob.slice(3))))

    return Math.max(dep-arr+1,0)
};

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.54MB Beats 29.03%
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {

    return Math.max(Math.min((month[Number(leaveAlice.slice(0,2))] + Number(leaveAlice.slice(3))),(month[Number(leaveBob.slice(0,2))] + Number(leaveBob.slice(3))))- Math.max((month[Number(arriveAlice.slice(0,2))] + Number(arriveAlice.slice(3))),(month[Number(arriveBob.slice(0,2))] + Number(arriveBob.slice(3)))) +1,0)
};
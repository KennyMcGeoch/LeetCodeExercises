/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 * Runtime 34ms Beats 51.72%
 * Memory 66.53MB Beats 51.72%
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    let rows = {}
    
    for (let i=0; i<reservedSeats.length; i++){
        if (reservedSeats[i][1] === 1 || reservedSeats[i][1] === 10) continue
        if (rows[reservedSeats[i][0]] === undefined) rows[reservedSeats[i][0]] = [1,1,1]
        if (reservedSeats[i][1] === 2 || reservedSeats[i][1] === 3 || reservedSeats[i][1] === 4 || reservedSeats[i][1] === 5){
            rows[reservedSeats[i][0]][0] = 0
        }
        if (reservedSeats[i][1] === 4 || reservedSeats[i][1] === 5 || reservedSeats[i][1] === 6 || reservedSeats[i][1] === 7){
            rows[reservedSeats[i][0]][1] = 0
        }
        if (reservedSeats[i][1] === 6 || reservedSeats[i][1] === 7 || reservedSeats[i][1] === 8 || reservedSeats[i][1] === 9){
            rows[reservedSeats[i][0]][2] = 0
        }
    }

    let ans = n * 2
    rows = Object.values(rows)

    for (let i=0; i<rows.length; i++){
        ans -= (2 - Math.max(rows[i][0] + rows[i][2], rows[i][1]))
    }

    return ans
};
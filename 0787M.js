/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 * Runtime: 358 ms, faster than 5.03% of JavaScript online submissions for Cheapest Flights Within K Stops.
 * Memory Usage: 57.6 MB, less than 36.59% of JavaScript online submissions for Cheapest Flights Within K Stops.
 */
var findCheapestPrice = function(n, flights, src, dst, k) {

    let sortedFlights = {}
    let ans = Infinity
    let invalid = true
    
    for (let i=0; i<flights.length; i++){
        if (sortedFlights[flights[i][0]] === undefined)sortedFlights[flights[i][0]] = {}
        sortedFlights[flights[i][0]][flights[i][1]] = flights[i][2]
        if (flights[i][1] === dst) invalid = false        
    }
        
    if (invalid) return -1
        
    fly(src,0,0)
    
    function fly(area, cost, trips){
        if (area == dst){
            ans = Math.min(ans, cost)
            return
        }
        else if (trips > k) return
        else if (cost > ans) return
        for (x in sortedFlights[area]){
            fly(x, cost + sortedFlights[area][x], trips + 1)
        }
    }
    if (ans === Infinity) return -1
    return ans
    
};
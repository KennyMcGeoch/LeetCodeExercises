/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 * Runtime: 110 ms, faster than 99.47% of JavaScript online submissions for Boats to Save People.
 * Memory Usage: 50.4 MB, less than 17.37% of JavaScript online submissions for Boats to Save People.
 */
var numRescueBoats = function(people, limit) {
    
    people.sort((a,b)=>a-b)
    let boats = 0
    let min = 0
    while(min < people.length){
        if (people[min] + people[people.length-1] <= limit)min++
        people.pop()
        boats++
    }
    
    return boats
    
};

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 * Runtime: 113 ms, faster than 98.95% of JavaScript online submissions for Boats to Save People.
 * Memory Usage: 49.5 MB, less than 82.11% of JavaScript online submissions for Boats to Save People.
 */
var numRescueBoats = function(people, limit) {
    
    people.sort((a,b)=>a-b)
    let boats = 0
    let min = 0
    let max = people.length-1
    while(min <= max){
        if (people[min] + people[max] <= limit)min++
        max--
        boats++
    }
    return boats
    
};
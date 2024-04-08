/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 * Runtime: 50 ms, faster than 74.18% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
 * Memory Usage: 49.1 MB, less than 41.01% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
 */
var countStudents = function(students, sandwiches) {
    
    let stud = [0,0]
    let total = students.length
    for (let i=0; i<students.length; i++)stud[students[i]]++
    for (let i=0; i<sandwiches.length; i++){
        if (stud[sandwiches[i]]-- === 0) return total
        else total--
    }
    
    return total
};

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 * Runtime: 45 ms, faster than 92.66% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
 * Memory Usage: 48.8 MB, less than 62.28% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
 */
var countStudents = function(students, sandwiches) {
    
    let stud = [0,0]
    let total = students.length
    stud[1] = students.reduce((a,b)=>a+b)
    stud[0] = students.length - stud[1]
    for (let i=0; i<sandwiches.length; i++){
        if (stud[sandwiches[i]]-- === 0) return total
        else total--
    }
    
    return total
};

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 * Runtime: 41 ms, faster than 98.73% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
 * Memory Usage: 48.8 MB, less than 71.90% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
 */
var countStudents = function(students, sandwiches) {
    
    let stud = []
    let total = students.length
    stud[1] = students.reduce((a,b)=>a+b)
    stud[0] = students.length - stud[1]
    for (let i=0; i<sandwiches.length; i++){
        if (stud[sandwiches[i]]-- === 0) return total
        else total--
    }
    
    return total
};
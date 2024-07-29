/**
 * @param {number[]} rating
 * @return {number}
 * Runtime: 583 ms, faster than 7.14% of JavaScript online submissions for Count Number of Teams.
 * Memory Usage: 57.9 MB, less than 5.36% of JavaScript online submissions for Count Number of Teams.
 */
var numTeams = function(rating) {
    let two = {}
    let ans = 0
    
    for (let i=0; i<rating.length; i++){
        let min = 0
        for (let j=0; j<i; j++){
            if (rating[i] > rating[j])min++
        }
        two[rating[i]] = min
        for (x in two){
            if (x < rating[i]) ans += two[x]
        }
    }

    two = {}

    rating.reverse()
    
    for (let i=0; i<rating.length; i++){
        let min = 0
        for (let j=0; j<i; j++){
            if (rating[i] > rating[j])min++
        }
        two[rating[i]] = min
        for (x in two){
            if (x < rating[i]) ans += two[x]
        }
    }
    
    return ans
};

/**
 * @param {number[]} rating
 * @return {number}
 * Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Count Number of Teams.
 * Memory Usage: 49 MB, less than 85.71% of JavaScript online submissions for Count Number of Teams.
 */
var numTeams = function(rating) {
    
    let ans = 0
    
    for (let i=0; i<rating.length; i++){
        let minLeft = 0
        let maxLeft = 0
        let minRight = 0
        let maxRight = 0
        for (let j=i-1; j>-1; j--){
            if (rating[j] < rating[i]) minLeft++
            else maxLeft++
        }
        for (let j=i+1; j<rating.length; j++){
            if (rating[j] < rating[i]) minRight++
            else maxRight++
        }
        ans += (minRight * maxLeft)
        ans += (maxRight * minLeft)
    }
    
    return ans
};
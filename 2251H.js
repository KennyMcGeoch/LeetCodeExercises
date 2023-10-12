/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 * Runtime: 3042 ms, faster than 31.58% of JavaScript online submissions for Number of Flowers in Full Bloom.
 * Memory Usage: 81.4 MB, less than 52.63% of JavaScript online submissions for Number of Flowers in Full Bloom.
 */
var fullBloomFlowers = function(flowers, people) {
    
    let bloom = []
    let fade = []
    
    for (let i=0; i<flowers.length; i++){
        bloom.push(flowers[i][0])
        fade.push(flowers[i][1])
    }
    bloom.sort((a,b)=>a-b)
    fade.sort((a,b)=>a-b)
    
    function findBloom(n){
        for (let i =0; i<bloom.length; i++){
            if (bloom[i] > n) return i
        }
        return bloom.length
        
    }
    function findFade(n){
        for (let i =0; i<fade.length; i++){
            if (fade[i] > n) return i
        }
        return fade.length
    }
    
    let solution = []
    for (let i=0; i<people.length; i++){
        solution.push(findBloom(people[i]) - findFade(people[i]-1))
    }
    
    return solution
    
}

/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 * Runtime: 203 ms, faster than 84.21% of JavaScript online submissions for Number of Flowers in Full Bloom.
 * Memory Usage: 79.2 MB, less than 89.47% of JavaScript online submissions for Number of Flowers in Full Bloom.
 */
var fullBloomFlowers2 = function(flowers, people) {
    
    let bloom = []
    let fade = []
    
    for (let i=0; i<flowers.length; i++){
        bloom.push(flowers[i][0])
        fade.push(flowers[i][1])
    }
    bloom.sort((a,b)=>a-b)
    fade.sort((a,b)=>a-b)
    
    function findBloom(n){
        let right = bloom.length-1
        if (bloom[right] <= n) return bloom.length
        let left = 0
        let temp = Math.floor((left+right)/2)
        while (right > left){
            if (bloom[left] > n)return left
            else if (bloom[temp] <= n) left = temp + 1
            else right = temp
        temp = Math.floor((left+right)/2)
        }
        return left
        
    }
    function findFade(n){
        let right = fade.length-1
        if (fade[right] <= n) return fade.length
        let left = 0
        let temp = Math.floor((left+right)/2)
        while (right > left){
            if (fade[left] > n)return left
            else if (fade[temp] <= n) left = temp + 1
            else right = temp
        temp = Math.floor((left+right)/2)
        }
        return left
    }
    
    let solution = []
    for (let i=0; i<people.length; i++){
        solution.push(findBloom(people[i]) - findFade(people[i]-1))
    }
    
    return solution
    
}
/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 * Runtime 85ms Beats 94.44%
 * Memory 69.51MB Beats 98.15%
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a,b)=>a-b)

    for (let i=0; i<asteroids.length; i++){
        if (mass >= asteroids[i]){
            mass += asteroids[i]
        }
        else return false
    }

    return true
};

/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 * Runtime 9ms Beats 100.00%
 * Memory 70.91MB Beats 74.07%
 */
var asteroidsDestroyed = function(mass, asteroids) {
    let dest = asteroids.length
    let hit = true

    while(hit && dest){
        hit = false
        for (let i=0; i<asteroids.length; i++){
            if (asteroids[i]){
                if (mass >= asteroids[i]){
                    mass += asteroids[i]
                    asteroids[i] = 0
                    dest--
                    hit = true
                }
            }
        }

    }

    return hit
};
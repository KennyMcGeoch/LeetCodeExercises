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
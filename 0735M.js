/**
 * @param {number[]} asteroids
 * @return {number[]}
 * Runtime: 128 ms, faster than 32.40% of JavaScript online submissions for Asteroid Collision.
 * Memory Usage: 44.8 MB, less than 19.80% of JavaScript online submissions for Asteroid Collision.
 */
 var asteroidCollision = function(asteroids) {

    let changes = true

    while (changes){
    changes = false
        for (i=0; i<asteroids.length - 1; i++){
            if (asteroids[i] > 0){
                if (asteroids[i+1] < 0){
                    collision()
                    i--
                    changes = true
                }
            }
            else {
                if (asteroids[i] > 0){
                    if (asteroids[i+1] < 0){
                        collision()
                    }
                    i--
                    changes = true
                }

            }

        }
    }
    function collision (){
        if (Math.abs(asteroids[i]) > Math.abs(asteroids[i+1])){
            asteroids.splice(i+1,1)
        }
        else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i+1])){
            asteroids.splice(i,1)
        }
        else{
            asteroids.splice(i,2)
        }
    }

    return asteroids
    
};
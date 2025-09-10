/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 * Runtime 111ms Beats 28.57%
 * Memory 66.59MB Beats 85.71%
 */
var minimumTeachings = function(n, languages, friendships) {

    let pupil = new Set()
    for (let i=0; i<languages.length; i++) languages[i].sort((a,b)=>a-b)

    for (let i=0; i<friendships.length; i++){
        if (findCommon(friendships[i][0]-1, friendships[i][1]-1)) friendships[i] = 0
        else{
            pupil.add(friendships[i][0])
            pupil.add(friendships[i][1])
        }
    }
    friendships = friendships.filter((a)=> a !== 0)

    if (friendships.length === 0) return 0

    let lang = new Array(n+1).fill(0)

    for (x of pupil){
        for (let i=0; i<languages[x-1].length; i++){
            lang[languages[x-1][i]]++
        }
    }

    return pupil.size - Math.max(...lang)


    function findCommon(a,b){
        let count = 0
        for (let j=0; j<languages[a].length; j++){
            while(languages[a][j] > languages[b][count]) count++
            if (count === languages[b].length) return false
            if (languages[a][j] === languages[b][count])return true
        }
        return false
    }

    
};

/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 * Runtime 19ms Beats 100.00%
 * Memory 68.04MB Beats 85.71%
 */
var minimumTeachings = function(n, languages, friendships) {

    let pupil = new Set()
    let langHash = [[]]
    for (let i=0; i<languages.length; i++){
        langHash[i+1] = {}
        for (let j=0; j<languages[i].length; j++){
            langHash[i+1][languages[i][j]] = true
        }
    }

    for (let i=0; i<friendships.length; i++){
        if (findCommon(friendships[i][0], friendships[i][1])) friendships[i] = 0
        else{
            pupil.add(friendships[i][0])
            pupil.add(friendships[i][1])
        }
    }
    friendships = friendships.filter((a)=> a !== 0)

    if (friendships.length === 0) return 0

    let lang = new Array(n+1).fill(0)

    for (x of pupil){
        for (let i=0; i<languages[x-1].length; i++){
            lang[languages[x-1][i]]++
        }
    }

    return pupil.size - Math.max(...lang)

    function findCommon(a,b){
        for (let j=0; j<languages[a-1].length; j++){
            if (langHash[b][languages[a-1][j]] === true) return true
        }
        return false
    }
    
};
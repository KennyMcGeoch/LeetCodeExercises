/**
 * @param {number[]} deck
 * @return {number[]}
 * Runtime: 60 ms, faster than 69.16% of JavaScript online submissions for Reveal Cards In Increasing Order.
Memory Usage: 51.5 MB, less than 80.37% of JavaScript online submissions for Reveal Cards In Increasing Order.
 */
var deckRevealedIncreasing = function(deck) {
    
    deck.sort((a,b)=>b-a)
    let ans = new Array(deck.length).fill(0)
    
    let place = 0

    while(deck.length){
        for (let i=0; i<ans.length; i++){
            if (ans[i] !== 0){
                continue
            }
            else{
                place = ~place
                
                if (place){
                     ans[i] = deck.pop()
                     if (deck.length === 0) return ans
                }
            }
        }
        
    }
    return ans
    
};
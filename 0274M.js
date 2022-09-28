/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {

    sortedArray = citations.sort(function(a, b){return a - b})

    console.log(sortedArray)
    
};

hIndex([3,0,6,1,5])
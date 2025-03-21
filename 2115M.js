/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 * Runtime 27ms Beats 86.44%
 * Memory 68.04MB Beats 35.59%
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    let hash = new Set
    let update = true
    let ans = []
    for (let i=0; i<supplies.length; i++) hash.add(supplies[i])

    while(update){
        update = false
        for (let i=0; i<recipes.length; i++){
            ingredients[i] = ingredients[i].filter((a)=> hash.has(a) === false)
            if (ingredients[i].length < 1){
                hash.add(recipes[i])
                ans.push(recipes[i])
                recipes[i] = ""
                update = true
            }
        }
        recipes = recipes.filter((a)=> a !== "")
        ingredients = ingredients.filter((a)=> a.length > 0)
    }

    return ans
};
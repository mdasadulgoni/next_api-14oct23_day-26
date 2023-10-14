// 1. Import Area
// 2. Define Area
async function GET(){

    // await
    let min = 124
    let max = 126
    var stockPrice = (Math.random()* (max - min) + min).toFixed(2)
    var stockPrice = parseFloat(stockPrice)
    // Every function return sosmething
    return Response.json(
        {
            price:stockPrice
        }
    )
}

// 3. Export Area
// 3.2 Named Export
module.exports = {GET}
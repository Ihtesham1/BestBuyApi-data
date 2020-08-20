const axios = require('axios').default;

function makeCall(path) {
    return new Promise(function (resolve , reject) {
        axios.get(path).then(
            (response) => {
                var result = response.data;
                console.log("Processing Request...");
                resolve(result);
            },
            (error) => {
                reject(error);
            }
        );
    });
}

async function main() {
    var result = await makeCall('https://api.bestbuy.com/v1/products((categoryPath.id=abcat0401000))?apiKey=zuKN5cDvqHGmtnzEm86cff3f&sort=modelNumber.asc&show=modelNumber,name,salePrice,regularPrice&page=2&pageSize=30&format=json');
    console.log(result.result);
    console.log(result.Error);
}


main();
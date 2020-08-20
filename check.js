var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var req = new XMLHttpRequest()

req.open('GET', 'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0401000))?apiKey=zuKN5cDvqHGmtnzEm86cff3f&sort=modelNumber.asc&show=modelNumber,name,salePrice,regularPrice&page=2&pageSize=30&format=json', true)

req.onload = function(){
    var data = this.response

    console.log(data)
}

req.send()
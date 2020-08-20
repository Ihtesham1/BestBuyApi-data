var allPages = [];
let totalpgs = 0;
var i;



var bby = require('bestbuy')('zuKN5cDvqHGmtnzEm86cff3f');

for (i = 1; i < 8; i++){
    bby.products('categoryPath.id=pcmcat209400050001',{show:'sku,name,salePrice,regularPrice', pageSize:30,page:i}).then(function(data){
        //console.log(data);
        currentPage = data["products"];
        allPages.push(currentPage);
        
      
      });
}

console.log(allPages);






/*
for (i = 1; i < totalpgs; i++){
    var currentPage = []
    console.log("working on: ",i);
    var bby = require('bestbuy')('zuKN5cDvqHGmtnzEm86cff3f');
    bby.products('categoryPath.id=pcmcat209400050001',{show:'sku,name,salePrice,regularPrice', pageSize:30,page:i}).then(function(data){
    currentPage = data["products"];
    if(i != 1){
        Array.prototype.push.apply(allPages, currentPage);
    }else{
        allPages = currentPage;
    }
    
});
}

console.log(allPages);

*/


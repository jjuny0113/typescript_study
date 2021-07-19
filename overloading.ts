{interface Product{
id:number;
description:string;
}

class ProductService {
// getProducts(description:string):Product[];
// getProducts(id:number):Product;
getProducts(product:number|string):Product[]|Product{
    if(typeof product ===  'number'){
        console.log(`Getting the product info for id ${product}`)
        return {id:product,description:'great product'}
    } else if(typeof product === 'string'){
        console.log(`Getting product with description ${product}`)
        return [{id:123,description:product},{id:789,description:product}]
    } else {
        return {id:-1,description:'Error:getProducts() accept only number or string as args'}
    }
}
}

const productService = new ProductService();

console.log(productService.getProducts(123))
console.log(productService.getProducts('blue jeans'))}
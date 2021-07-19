interface MoterVehicle {
    startEngine():boolean;
    stopEngine():boolean;
    brake():boolean;
    accelerate(speed:number);
    hank(howLong:number):void;
}

interface Flyable extends MoterVehicle{
    fly(howHigh:number);
    land();
}

interface Swimmable{
    swim(howFar:number);
}
class Car implements MoterVehicle{
    startEngine():boolean{
        return true;
    }
    stopEngine():boolean{
        return true
    }
    brake():boolean{
        return true
    }

    accelerate(speed:number){
        console.log(`Driving faster`)
    }
    hank(howLong:number):void{
        console.log(`Beep beep yeah!`)
    }
}

class SecretServiceCar implements Flyable,Swimmable{
    startEngine():boolean{
        return true
    }
    stopEngine():boolean{
        return true;
    }
    brake():boolean{
        return true;
    }
    accelerate(speed:number){
        console.log(`Driving faster`)
    }
    hank(howLong:number){
        console.log(`Beep beep yeah!`)
    }
    fly(howHigh:number){
        console.log(`Flying ${howHigh} feet high`);
    }
    land(){
        console.log(`Landing. Fasten your belts`)
    }
    swim(howFar:number){
        console.log(`Swimming ${howFar} feet`)
    }
}

// class Product {
//     id:number;
//     descripyion:string;
// }

// class ProductService{
//     getProducts():Product[]{
//         return [];
//     }
//     getProductById(id:number){
//         return {id:123,description:'Good product'}
//     }
// }

// const productService = new ProductService();
// const products = productService.getProducts();

// class MockProductService implements ProductService{
//     getProducts():Product[]{
//         return []
//     }
//     getProductById(id:number){
//         return {id:456,description:`Not a real product`}
//     }
// }

interface Product {
    id:number;
    description:string;
}

interface IProductService {
    getProducts():Product[];
    getProductById(id:number):Product
}

class ProductService implements IProductService {
    getProducts():Product[]{
        return []
    }
    getProductById(id:number):Product{
        return {id:123,description:`Good product`}
    }
}

// factory function
function getProductService(isProduction:boolean):IProductService{
    if(isProduction){
        return new ProductService();
    } else {
        // return new MockProductionService();  
    }
}
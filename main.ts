{const getFinalPrice =  (price:number, discount:number) => price - price/discount 

console.log(getFinalPrice(100,10))
// console.log(getFinalPrice(100,"10%"))

type Patient = {
    name:string;
    height:number;
    weight?:number;
}

let patient:Patient={
    name:"Joe Smith",
    height:5,
    
}

class Person {
    constructor(public firstName:string, public lastName:string, public age:number ){}
}

const p = new Person("John","Smith",25)

class Dog {
    constructor(readonly name:string){}
    sayHello():string{
        return "Dog say Hello"
    }
}

class Fish {
    constructor(readonly name:string){}

    dive(howDeep:number):string{
        return `Dive ${howDeep} feet`
    }
}

type Pet = Dog|Fish;

const talkToPet = (pet:Pet):string => {
    if(pet instanceof Dog){
       return pet.sayHello()
    } else if(pet instanceof Fish){
        return 'Fish cannet talk, Sorry'
    }
}
}
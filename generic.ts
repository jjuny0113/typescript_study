// class Person {
//     name:string;
// }

// class Employee extends Person {
//     department:number;
// }

// class Animal {
//     name:string;
//     breed:string;
// }

// const workers:Array<Person> = []

// workers[0] = new Person();
// workers[1] = new Employee();
// workers[2] = new Animal()

// interface Comparator<T> {
//     compareTo(value:T):number;
// }

// class Rectangle implements Comparator<Rectangle>{
//     constructor(private width:number, private height:number){
//     }
//     compareTo(value:Rectangle):number{
//         return this.width * this.height - value.width * value.height
//     }
// }

// const rect1:Rectangle = new Rectangle(2,5)
// const rect2:Rectangle = new Rectangle(2,3)

// class Programmer implements Comparator<Programmer>{
//     constructor(public name:string, private salary:number){}
//     compareTo(value:Programmer):number{
//         return this.salary-value.salary
//     }
// }

// const printMe = (content:any):any => {
//     console.log(content)
//     return content
// }

const printMe = <T>(content:T):T => {
    console.log(content)
    return content
}
// const a = printMe('Hello')
const a = printMe<string>('Hello')



class Person {
    constructor(public name:string){}
}

// const b = printMe(new Person('Joe'))
const b = printMe<Person>(new Person('Joe'))

class Pair<K,V>{
    constructor(public key:K, public value:V){}
}

const compare = <K,V>(pair1:Pair<K,V>, pair2:Pair<K,V>):boolean => pair1.key === pair2.key && pair1.value === pair2.value;

interface User {
    name:string;
    role:UserRole;
}

enum UserRole {
    Administrator = 'admin',
    Manager = 'manager'
}

const loadUser= <T>():T => JSON.parse('{"name":"john","role":"admin"}')

const user = loadUser<User>();

const outerFunc = (someValue:number)=>(multiplier:number) => someValue * multiplier

const innerFunc = outerFunc(10);
let result = innerFunc(5);

type numFunc<T> = (org:T)=>(c:number)=>number;

const noArgFunc:numFunc<void> = () => (c:number) => c +5;

const numArgFunc:numFunc<number> = (someValue:number) => (multiplier:number)=> someValue * multiplier
const stringArgFunc:numFunc<string> = (someText:string) => (padding:number) => someText.length + padding;
// const createSumString:numFunc<number> = () => (x:number) => 'Hello' 오류발생!
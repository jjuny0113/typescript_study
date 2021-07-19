    {
        interface Person {
            name:string;
            age:number;
        }

        // const worker:Person = {name:"John",age:22}

        // const doStuff = (person:Readonly<Person>) => {
        //     person.age = 23
        // } 오류

        //필터함수 사용의 나쁜 예(존재하지 않는 프로퍼티 이름이나 잘못된 타입으로 함수를 호출시 찾기 어려운 오류가 발생할 수 있음)
        const persons:Person[]=[{name:'John',age:32},{name:'Mary',age:33}]
        
        // 오류를 못잡아냄
        const filterBy1 = <T>(property:any, value:any, array:T[]) => array.filter(item => item[property] === value)
        console.log(filterBy1('name','John',persons))
        console.log(filterBy1('lastName','John',persons))
        console.log(filterBy1('age','twenty',persons))

        // 오류를 잡아낼 수 있음
        const filterBy = <T,P extends keyof T>(property:P, value:T[P], array:T[]) => array.filter(item => item[property] === value)
        console.log(filterBy('name','John',persons))
        // console.log(filterBy('lastName','John',persons)) 오류
        // console.log(filterBy('age','twenty',persons)) 오류
    }
    {
        interface Person {
            readonly name:string;
            readonly age:number;
        }

        type Modifiable<T> = {
            -readonly [P in keyof T]:T[P];
        }
        // const worker1:Modifiable<Person> = {name:'John',age:25}
        // worker1.age = 26
        type Partial<T> = {
            [P in keyof T]? :T[P]
        };
        type Required<T> ={
            [P in keyof T]-?:T[P]
        }
        const worker1:Readonly<Partial<Person>> = {name:"John"}

        interface Person2{
            name:string;
            age:number;
            address:string;
        }
        type Pick<T,K extends keyof T> = {
            [P in K] : T[P]
        }
        type PersonNameAddress<T,K> = Pick<Person2,'name'|'address'>
    }
    {
        class Product {
            id:number;
        }

        const getProducts = <T>(id?:T): T extends number?Product:Product[]=>{
            if(typeof id ==='number'){
                return {id:123} as any;
            } else {
                return [{id:123},{id:567}] as any;
            }
        }
        const result1 = getProducts(123);
        const result2 = getProducts();
        console.log(result1);
        console.log(result2);
        
        class Person {
            id:number;
            name:string;
            age:number;
        }

        type RemoveProps<T,K> = Exclude<keyof T,K>
        type RemainingProps = RemoveProps<Person, 'name'|'age'>
        type PersonBlindAuditions = Pick<Person,RemainingProps>
    }
    {
        interface SyncService {
            baseUrl:string;
            getA():string;
        }
        class AsnycService implements Promisify<SyncService>{
            
        }
    }
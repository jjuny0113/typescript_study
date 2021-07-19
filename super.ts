{class Person{
    constructor(public firstName:string, public lastName:string, public age:number){}


    sellStock(symbol:string, numberOfShares:number){
        console.log(`Selling ${numberOfShares} of ${symbol}`)
    }
}

class Employee extends Person {
    constructor(public firstName:string, public lastName:string, public age:number, public department:string){
        super(firstName,lastName,age)
    }

    sellStock(symbol:string, shares:number){
        super.sellStock(symbol,shares);
        this.reportToCompliance(symbol,shares);
    }

    private reportToCompliance(symbol:string, shares:number){
        console.log(`${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`)
    }
}

const empl = new Employee('Joe','Smith',29,"Accounting");
empl.sellStock('IBM',100)
}
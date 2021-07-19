enum Weekdays {
    Monday =1,
    Tuesday ,
    Wednesday ,
    Thursday ,
    Friday ,
    Saturday ,
    Sunday 
}

let dayOff = Weekdays.Tuesday;
console.log(Weekdays[3])

enum Direction {
    FtoC,
    CtoF
}

const convertTemperature = (temp:number, fromTo:Direction):number => Direction.FtoC === fromTo ? (temp-32)*5.0/9.0 : temp * 9.0/5.0 +32;


console.log(`70F is ${convertTemperature(70,Direction.FtoC)}C`);

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

enum ProductionActionTypes {
    Search = 'Products Search',
    Load = 'Products Load All',
    LoadFailure = 'Products Load All Failure',
    LoadSuccess = 'Products Load All Success',
}

console.log(ProductionActionTypes.LoadFailure)


let str:string = 'hello'
let num:number = 42
let isActive: boolean = false

let stdArr:string[] = ['h','e','l','l']
let numArr: Array<number> = [1,2,3]



function logInfo(name: string,age: number): void{
    console.log(`info : ${name} ${age}`)
}

logInfo('Tatyana',20)

function calc ( a:number,b:number | string):number{
    if (typeof b === 'string') b = +b
    return a+b
}
console.log(calc(2,3))


class Server {
    static VERSION = '1.03.20'
    // public name: string;
    // protected ip:number
    private status:string = 'working'
    constructor(public name:string,protected ip:number){
        this.name = name
        this.ip = ip
    }
    public turnOn(){
        this.status = 'working'

    }
    protected turnOff(){
        this.status = 'offline'
    }
    getStatus():string{
        return this.status
    }
}
const server:Server = new  Server ('aws',1234)




//  ----------------------------
interface UserInterfase{
    name:string,
    age:number,
    logInfo : () => void
    id?: any /* необязательный парметр */
}
const user = {
    name:'Tatyana',
    age:20,
    logInfo(){
        console.log(this.name + ' ' + this.age)
    }
}
// ----------------------------

interface SayHello{
    sayHello: () => void
}


class User implements SayHello{
    constructor(private name:string,private age:number){

    }
    sayHello(){
        console.log(this.name + 'hello')
    }
}
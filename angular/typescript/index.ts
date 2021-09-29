

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


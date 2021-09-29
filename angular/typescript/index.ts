

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
    return a+b
}
console.log(calc(2,3))



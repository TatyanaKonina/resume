var str = 'hello';
var num = 42;
var isActive = false;
var stdArr = ['h', 'e', 'l', 'l'];
var numArr = [1, 2, 3];
function logInfo(name, age) {
    console.log("info : " + name + " " + age);
}
logInfo('Tatyana', 20);
function calc(a, b) {
    if (typeof b === 'string')
        b = +b;
    return a + b;
}
console.log(calc(2, 3));
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        // public name: string;
        // protected ip:number
        this.status = 'working';
        this.name = name;
        this.ip = ip;
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.03.20';
    return Server;
}());
var server = new Server('aws', 1234);
var user = {
    name: 'Tatyana',
    age: 20,
    logInfo: function () {
        console.log(this.name + ' ' + this.age);
    }
};
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function () {
        console.log(this.name + 'hello');
    };
    return User;
}());

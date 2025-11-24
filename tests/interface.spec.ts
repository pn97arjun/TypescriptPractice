import {test} from '@playwright/test'
test("interface",async({})=>{
interface Myinterface{
    propertyA:string;
    propertyB:string;
    myfunction(message:string):void;
}
class MyClass implements Myinterface{
    propertyA: string;
    propertyB: string;
    constructor(a:string,b:string)
    {
        this.propertyA=a;
        this.propertyB=b;
    }
    myfunction(message: string): void {
        console.log(`${message}`)
        console.log(`${this.propertyA}`)
        console.log(`${this.propertyB}`)
    }
}

const myobject:Myinterface=new MyClass("value1","value2");
myobject.myfunction("Welcome");
})
import {test} from '@playwright/test'
import {format}from 'date-fns'
test("palin26nov",async()=>{
let n=141,sum=0,r=0;
let temp:number;
temp=n;
while(n>0)
{
    r=n%10;
    sum=(sum*10)+r;
    n=Math.floor(n/10)
}
if(sum===temp)
    console.log("Palindrome "+sum)
else
    console.log("Not palindrome "+sum)

})
test("date26nov",async()=>{
const date=new Date
const datstr=format(date,"dd/MM/yyyy")
console.log(datstr)
    
})
test("swapp string nov26",async()=>{
    let a="how"
    let b="you"
    a=a+b;
    b=a.substring(0,a.length-b.length)
    a=a.substring(b.length)
    console.log(a+" "+b)
})
test("whitespnov16",async()=>{
    let str="you how imaz"
    let replstr=str.replace(/\s/g,'')
    console.log(replstr)
})

test("fiboo",async()=>{
    let f1=0,f2=1,n=10
    let f3:number
    console.log(f1)
    console.log(f2)
    for(let i=1;i<=n;i++)
    {
        f3=f1+f2;
        console.log(f3)
        f1=f2;
        f2=f3;

    }
})
test("reversestnov26",async()=>{
    let str="malayalaml";
    let replstr=""
    for(let i=str.length-1;i>=0;i--)
    {
        replstr+=str.charAt(i)
    }
    console.log(replstr)
})
test("sortnonov26",async()=>{
    let arr:number[]=[4,5,1,3,2]
    let temp:number
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                temp=arr[j]
                arr[j]=arr[i]
                arr[i]=temp
            }
        }
    }
     for(let i=0;i<arr.length;i++)
        console.log(arr[i])
    
})
test("reverseElements",async()=>{
    let arr:number[]=[1,2,3,4,5]
    for(let i=arr.length-1;i>=0;i--)
        console.log(arr[i])
})

test("duplielements",async()=>{
    let arr:number[]=[1,1,22,2,3,3,4]
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                console.log(arr[j])
            }
        }
    }
})
test("primno26nov",async()=>{
    let num:number=15
    let temp:number
    let prime:Boolean=true
    for(let i=2;i<=Math.floor(num/2);i++)
    {
        temp=num%i;
        if(temp==0)
        {
            prime=false;
            break;
        }
    }
    if(prime)
        console.log("Prime no "+num)
    else
        console.log("NotPrime no "+num)
    
})

test("pg",async()=>{
    
})
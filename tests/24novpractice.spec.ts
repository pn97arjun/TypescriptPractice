import{test} from '@playwright/test'
import {format} from 'date-fns'
test("palindrom",async()=>{
let n=454,sum=0,r=0
let temp:number
temp=n;
while(n>0){
    r=n%10
    sum=(sum*10)+r
    n=Math.floor(n/10)
}
if(temp===sum)
    console.log("palindrom "+sum)
else
    console.log("not palindrom "+sum)

})

test("date",async()=>{
const date=new Date()
const dateStr=format(date,"dd/MM/yyyy")
console.log(dateStr)

})

test("swapno",async()=>{
let a=5,b=10
a=a+b;
b=a-b;
a=a-b;
console.log(a+" "+b)

})

test("swap string",async()=>{
let a="how"
let b="you"
a=a+b;
b=a.substring(0,a.length-b.length)
a=a.substring(b.length)
console.log(a+" "+b)

})

test("whitespc",async()=>{
let str:string="how you i"
let replaceStr:string=str.replace(/\s/g,"")
console.log(replaceStr)

})


test("fibo",async()=>{
let f1=0,f2=1,n=10
let f3:number
console.log(f1)
console.log(f2)
for(let i=1;i<=n;i++)
{
    f3=f1+f2;
    console.log(f3)
    f1=f2
    f2=f3

}

})

test("reverse",async()=>{
let str:string="malayalaml"
let replaceStr:string=""
for(let i=str.length-1;i>=0;i--)
{
    replaceStr+=str.charAt(i)
}
console.log(replaceStr)

})

test("sortno",async()=>{
let arr:number[]=[4,3,2,1,5]
let temp:number
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;i<arr.length;j++)
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
    console.log(arr[i]+" ")


})

test("reverseElememts",async()=>{
let arr:number[]=[1,2,3,4,5]
for(let i=arr.length-1;i>=0;i--)
    console.log(arr[i])

})

test("duplicateElements24nov",async()=>{
const arr:number[]=[2,2,4,4,1]
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]===arr[j])
        {
            console.log(arr[j])
        }

    }
}

});

test("primeno24nov",async()=>{
let num=15
let temp:number
let prime:Boolean=true
for(let i=2;i<=Math.floor(num/2);i++)
{
    temp=num%i;
    if(temp==0)
    {
        prime=false
        break;
    }
}
if(prime)
    console.log("Primeno "+num)
else
    console.log("Not Primeno "+num)

})

test("sortwordsnov24",async()=>{
let c:string[]=["zim","bang","afg","canda"]
let a:string=""
for(let i=0;i<c.length;i++)
{
    for(let j=i+1;j<c.length;j++)
    {
        if(c[i]>c[j])
        {
            a=c[i];
            c[i]=c[j]
            c[j]=a
        }
    }
}
for(let i=0;i<c.length;i++)
    console.log(c[i])

})

test("duplicatocc24nov",async()=>{
let str:string="selenium l"
let c:string[]=str.split('')
for(let i=0;i<c.length;i++)
{
    let count:number=1
    for(let j=i+1;j<c.length;j++)
    {
        if(c[i]===c[j] && c[j]!==' ')
        {
            count++;
            c[j]='0'
        }
    }
    if(count>1 && c[i]!=='0')
        console.log(count+" "+c[i])
}

})
test("revwordnov24",async()=>{
let input:string="Test Automation"
let words:string[]=input.split(" ") 
let reverseSentence:string=""
for(const word of words)
{
    let reverseWord=word.split("").reverse().join("")
    reverseSentence+=reverseWord+" "
}
console.log(reverseSentence)

})

test("pyramid24nov",async()=>{
let rows=5
for(let i=1;i<=rows;i++)
{
    let line=""
    for(let j=i;j<rows;j++)
    {
        line+=" "
    }
    for(let k=1;k<=(2*i)-1;k++)
    {
        line+="*"
    }
    console.log(line)

}

})

test("seconsmallnov24",async()=>{
    let arr:number[]=[4,2,3,1]
    let smallest:number=Number.MAX_SAFE_INTEGER
    let secondSmallest:number=Number.MAX_SAFE_INTEGER

    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]<smallest)
        {
            secondSmallest=smallest;
            smallest=arr[i];
        }
        else if(arr[i]<secondSmallest && arr[i]!==smallest)
        {
            secondSmallest=arr[i];
        }
    }
    console.log(secondSmallest)


})

test("factorialnov24",async()=>{
let factorial=1;
let n=4
for(let i=1;i<=n;i++)
{
    factorial*=i
}
console.log(factorial)

})

test("duplicateword",async()=>{

    let words:string[]=["xin","zim","aus","zim","xin","bang"]
    const seenwords=new Set<String>();
    const duplicateWords=new Set<String>();

    for(const word of words)
    {
        if(seenwords.has(word))
        {
            duplicateWords.add(word)
        }
        else
        {
            seenwords.add(word)
        }
    }
    console.log(duplicateWords)

})

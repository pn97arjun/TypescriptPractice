import {test} from '@playwright/test'
import { chromium } from '@playwright/test'
import { count } from 'console'
import{format} from 'date-fns'

test("browser",async()=>{
const browser=await chromium.launch({headless:false,channel:'msedge'})
const newPage=await browser.newPage()
await newPage.goto("https://www.amazon.com")
await newPage.close()

})

test("dupliacte words",()=>{
let words:string[]=["zim","ban","aus","denk","zim","aus"]

let seenWords=new Set<String>()

let duplicateWords=new Set<String>()

for(const word of words)
{
    if(seenWords.has(word))
    {
        duplicateWords.add(word)
    }
    else
    {
        seenWords.add(word)
    }
}
console.log(duplicateWords)
    
})

test("factorial",async()=>{
let factorial=1
let n=5
for(let i=1;i<=n;i++)
{
    factorial*=i
}
console.log(factorial)
})

test("second smallest",async()=>{
let arr:number[]=[2,1,3,4,5]

let smallest:number=Number.MAX_SAFE_INTEGER
let secondSmallest=Number.MAX_SAFE_INTEGER

for(let i=0;i<arr.length;i++)
{
    if(arr[i]<smallest)
    {
        secondSmallest=smallest
        smallest=arr[i]
    }
    else if(arr[i]<secondSmallest && arr[i]!=smallest)
    {
        secondSmallest=arr[i]
    }
}
console.log(secondSmallest)

})

test("pyramid",async()=>{
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

test("reverse words",async()=>{
let input:string="Test Automation"
let words:string[]=input.split(' ')
let reverseSentence=""
for(const word of words)
{
    let reversewords=word.split("").reverse().join("")
    reverseSentence+=reversewords+" "
}
console.log(reverseSentence)
})


test("dupli ocurence",async()=>{
let input:string="selenium lem"
let c:string[]=input.split('')
for(let i=0;i<c.length;i++)
{
    let count=1
    for(let j=i+1;j<c.length;j++)
    {
        
        if(c[i]===c[j] && c[i]!==' ')
        {
            count++;
            c[j]='0'
        }
    }
    if(count>1 && c[i]!=='0')
        console.log(c[i]+" "+count)
}

})

test("all occ",async()=>{
let input:string="selenium lem"

let charCount:Map<string,number>=new Map()

for(let i=0;i<input.length;i++)
{
    let char:string=input[i]

    if(charCount.has(char))
    {
        charCount.set(char,charCount.get(char)!+1)
    }
    else{
        charCount.set(char,1)
    }
}

charCount.forEach((count,char)=>{
    console.log(`${char} : ${count}`)
})

})


test("intersection of array",async()=>{
let arr1:number[]=[1,2,3,4,5]
let arr2:number[]=[4,5,6,7,8]

let intersection:number[]=arr1.filter(element=>{
   return arr2.includes(element)
})
console.log(intersection)
})

test("sort words",async()=>{
let c:string[]=["zim","ban","aus","canada","melhi","delhi"]
let a=""

for(let i=0;i<c.length;i++)
{
   
    for(let j=i+1;j<c.length;j++)
    {
        if(c[i]>c[j])
        {
            a=c[i]
            c[i]=c[j]
            c[j]=a
        }
    }
}
for(let i=0;i<c.length;i++)
    console.log(c[i])

})

test("prime",async()=>{
let num=13
let prime:Boolean=true
let temp:number
for(let i=2;i<=Math.floor(num/2);i++)
{
    temp=num%i
    if(temp===0)
    {
        prime=false;
        break
    }
}
if(prime)
{
    console.log("prime no "+num)
}
else
{
    console.log("Not a prime: "+num)
}
})

test("dupli ele",async()=>{
let arr:number[]=[2,3,5,1,4,2,5]
for(let i=0;i<arr.length;i++)
{
   
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]===arr[j])
            console.log(arr[j])
    }
}

})

test("rev stsr",async()=>{
let str="maayalaml"
let revstr=""
for(let i=str.length-1;i>=0;i--)
{
    revstr+=str.charAt(i)
}
console.log(revstr)
})

test("sort no",async()=>{
let arr:number[]=[2,3,5,1,4,2,5]
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

test("white space",async()=>{
let str="h u i"
let replstr=str.replace(/\s/g,"")
console.log(replstr)
})

test("date",async()=>{
const date=new Date()
const datStr=format(date,"dd/MM/yyyy")
console.log(datStr)
})

test("swap str dec",async()=>{
let a="how"
let b="yoi"
a=a+b
b=a.substring(0,a.length-b.length)
a=a.substring(b.length)
console.log(a+" "+b)
})

test("palin",async()=>{
let n=141,r=0,sum=0,temp:number
temp=n
while(n>0){
    r=n%10
    sum=(sum*10)+r
    n=Math.floor(n/10)
}
if(sum===temp)
    console.log("palindrome "+sum)
else
     console.log("not palindrome "+sum)

})

test("remove duplicates",async()=>{
let arr:number[]=[2,3,5,1,4,2,5,5,4]

let uniqueArray:number[]=[... new Set(arr)]
console.log(uniqueArray)
})

test("fboonacci",async()=>{
let f1=0,f2=1,f3:number
let n=10
console.log(f1)
console.log(f2)
for(let i=1;i<=n;i++)
{
    f3=f1+f2
    console.log(f3)
    f1=f2
    f2=f3
}


})

test("reverse order",async()=>{
let sentence: string="India is my country"
// 1. Trim leading/trailing spaces and split the string into an array of words
  //    using a regular expression (/\s+/) to handle multiple spaces between words.
  const words: string[] = sentence.trim().split(/\s+/);

  // 2. Reverse the order of elements (words) in the array.
  const reversedWords: string[] = words.reverse();

  // 3. Join the reversed array of words back into a single string using a single space as a separator.
  const result: string = reversedWords.join(" ");

  console.log(result)
})




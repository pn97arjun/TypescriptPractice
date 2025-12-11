import { test, expect } from '@playwright/test'
import { chromium } from '@playwright/test'
//import { count } from 'console'
import {format} from 'date-fns'

test("brwser launch", async () => {
    const browser = await chromium.launch({ headless: false, channel: 'chrome' })
    const page = await browser.newPage()
    await page.goto("https://www.amazn.com")
    await page.close()
})


test("dupli words ", async () => {
    let words: string[] = ["zim", "ban", "aus", "zim", "ban"]

    let seenWords = new Set<String>()
    let duplicateWords = new Set<String>

    for (const word of words) {
        if(seenWords.has(word))
        {
            duplicateWords.add(word)
        }
        else{
            seenWords.add(word)
        }
    }
    console.log(duplicateWords)

})

test("factorial",async()=>{
    let factorial=1
    let n=5;
    for(let i=1;i<=n;i++)
    {
        factorial*=i
    }
    console.log(factorial)
})

test("second smallest",async()=>{
let arr:number[]=[2,5,4,3,26,1]
let smallest:number=Number.MAX_SAFE_INTEGER
let secondSmallest=Number.MAX_SAFE_INTEGER

for(let i=0;i<arr.length;i++)
{
    if(arr[i]<smallest)
    {
        secondSmallest=smallest
        smallest=arr[i]
    }
    else if(arr[i]<secondSmallest && arr[i]!==smallest)
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

test("reverse words pg",async()=>{
   let input:string="Test Automation" 
   let words:string[]=input.split(" ")
   let reverseSentence=""
   for(const word of words)
   {
    let reveresewords=word.split("").reverse().join("")
    reverseSentence+=reveresewords+" "
   }
   console.log(reverseSentence)
})

test("duplicate occ",async()=>{
    let input:string="selenium lem"
    let c:string[]=input.split('')
    for(let i=0;i<c.length;i++)
    {
        let count=1
        for(let j=i+1;j<c.length;j++)
        {
            if(c[i]===c[j] && c[j]!==' ')
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

test("inter",async()=>{
let ar1:number[]=[1,2,3,4,5]
let arr2:number[]=[4,5,6,7,8]

let intersection:number[]=ar1.filter(element=>{
   return arr2.includes(element)
})
console.log(intersection)

})

test("sort words",async()=>{
  let c:string[]=["zim","ban","lun","aus","can"]
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
test("prime no",async()=>{
    let num=13
    let prime:Boolean=true
    let temp:number
    for(let i=2;i<=Math.floor(num/2);i++)
    {
        temp=num%i
        if(temp===0)
        {
            prime=false
            break
        }
    }
    if(prime)
        console.log("Prime no "+num)
    else
        console.log("not prime: "+num)
})

test("dupli elem",async()=>{
    let arr:number[]=[1,2,2,3,4,4]
    for(let i=0;i<arr.length;i++)
    {
        
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
                console.log(arr[j])
        }
    }
})

test("remove duplicates",async()=>{
     let arr:number[]=[1,2,2,3,4,4]
     let unqueArr=[... new Set(arr)]
     console.log(unqueArr)
})

test("reverseEle",async()=>{
    let str="malayalml"
    let revstr=""
    for(let i=str.length-1;i>=0;i--)
    {
        revstr+=str.charAt(i)
    }
    console.log(revstr)
})
test("sort",async()=>{
     let arr:number[]=[1,7,5,3,2,6]
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

test("sdsd",async()=>{
    let str="u h i"
    let replstr=str.replace(/\s/g," ")
    console.log(replstr)
})

test("swap str",async()=>{
let a="how"
let b="you"
a=a+b
b=a.substring(0,a.length-b.length)
a=a.substring(b.length)
console.log(a+" "+b)

})

test("date",async()=>{
    const date=new Date()
    const datdfrm=format(date,"dd/MM/yyyy")
    console.log(datdfrm)
})

test("palindrome",async()=>{
    let n=141,r=0,sum=0
    let temp
    temp=n
    while(n>0)
    {
        r=n%10
        sum=(sum*10)+r
        n=Math.floor(n/10)
    }
    if(temp==sum)
        console.log("palin "+sum)
    else
        console.log("not palin "+sum)
})
test("all",async()=>{
    
})


import {test} from '@playwright/test'
import { chromium } from '@playwright/test'
test("browser test 6jan",async({})=>{
const browser=await chromium.launch({headless:false,channel:'msedge'})

const page =await browser.newPage()

await page.goto("https://www.amazon.com")

await page.close()
})

test("duplicate words 6 jan",async({})=>{
    const words:string[]=["zim", "aus", "zim", "ban", "canada", "ban", "aus"]

    const duplicateWords=new Set<String>()
    const seenWords=new Set<String>()

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
    console.log(duplicateWords.size)
})

test("factorial jan6",async({})=>{
    let n=5;
    let factorial=1
    for(let i=1;i<=n;i++)
    {
        factorial*=i
    }
    console.log(factorial)
})

test("second smallest 6jan",async({})=>{
  let arr:number[]=[2,1,3,4,5]  

  let smallest=Number.MAX_SAFE_INTEGER

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
  console.log(smallest)

})

test("reverse words 6jan",async({})=>{
    let input="Test Automation"
    let words:string[]=input.split(' ')
    let reverseSentence=""
    for(const word of words)
    {
        let reverseWords=word.split('').reverse().join("")
        reverseSentence+=reverseWords+" "
    }
    console.log(reverseSentence)
})

test("reverseString 6jan",async({})=>{
    let str="malayalaml"
    let revstr=""
    for(let i=str.length-1;i>=0;i--)
    {
        revstr+=str.charAt(i)
    }
    console.log(revstr)
})

test("reverse from last",async({})=>{
    let input:string="India is my country"

    let splitstring:string[]=input.trim().split(/\s+/)

    let revStr=splitstring.reverse().join(" ")

    console.log(revStr)
})

test("dupli occurence 6thjan",async({})=>{
    let input="selenium lem"
    let c:string[]=input.split('')
    for(let i=0;i<c.length;i++)
    {
        let count=1
        for(let j=i+1;j<c.length;j++)
        {
            if(c[i]===c[j] && c[j]!=' ')
            {
                count++;
                c[j]='0'
            }
        }
        if(count>1 && c[i]!=='0')
        {
            console.log(count+" "+c[i])
        }
    }
})

test("all occ 6thjan",async({})=>{
 let input="selenium lem"

 let charCounts:Map<string,number>=new Map();

 for(let i=0;i<input.length;i++)
 {
    let char=input[i]
    if(charCounts.has(char))
    {
        charCounts.set(char,charCounts.get(char)!+1)
    }
    else
    {
        charCounts.set(char,1)
    }
 }
 charCounts.forEach((count,char)=>{
    console.log(`${char} : ${count}`)

 })

})

test("inetrsection 6thjan",async({})=>{
 let arr1:number[]=[1,2,3,4,5]
 let arr2:number[]=[4,5,6,7,8]

 let intersection:number[]=arr1.filter(element=>{
    return arr2.includes(element)
 })

 console.log(intersection)

})

test("sort words 6thjan",async({})=>{
      let c: string[] = ["ban", "zim", "den", "aus"]
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

test("sort jan6th", async ({ }) => {
    let c:number[]=[3,4,5,6,9,2,1,7]
    let temp:number
    for(let i=0;i<c.length;i++)
      {
        for(let j=i+1;j<c.length;j++)
        {
            if(c[i]>c[j])
            {
                temp=c[j]
                c[j]=c[i]
                c[i]=temp
            }
        }
    }
    for(let i=0;i<c.length;i++)
        console.log(c[i])
})

test("dupli ele jan6th", async ({ }) => {
    let c:number[]=[3,3,4,5,6,9,2,1,7,1,7,5,4]

      for(let i=0;i<c.length;i++)
      {
        for(let j=i+1;j<c.length;j++)
        {
            if(c[i]===c[j])
                console.log(c[j])
        }
    }
})

test("dupli array jan6th", async ({ }) => {
     let c:number[]=[3,3,4,5,6,9,2,1,7,1,7,5,4]

     let arraySet:number[]=[...new Set(c)]
     console.log(arraySet)
})

test("prime jan6th", async ({ }) => {
    let num=13
    let prime:boolean=true
    let temp:number
    for(let i=2;i<Math.floor(num/2);i++)
    {
        temp=num%i
        if(temp===0)
        {
            prime=false
            break
        }
    }
    if(prime)
        console.log("prime "+num)
    else
        console.log("not prime "+num)

})

test("palin jan6th", async ({ }) => {
    let n=141
    let temp:number
    let r,sum=0
    temp=n

    while(n>0)
    {
        r=n%10
        sum=(sum*10)+r
        n=Math.floor(n/10)
    }
    if(sum===temp)
        console.log("palin "+sum)
    else
        console.log("not palin "+sum)
})

test("rev mpahsis 6th jan", async ({ }) => {
    let input:string="Inida is my country"

    let revstr=input.trim().split(/\s+/)

    let result=revstr.reverse().join(" ")
    console.log(result)
})

test("swap str jan 6th",async({})=>{
    let a="how"
    let b="you"
    a=a+b
    b=a.substring(0,a.length-b.length)
    a=a.substring(b.length)
    console.log(a+" "+b)
})



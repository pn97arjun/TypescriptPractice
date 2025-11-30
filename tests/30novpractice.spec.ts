import {test} from '@playwright/test'
import {format} from 'date-fns'
import { chromium } from '@playwright/test'

test("import browser",async({})=>{
    const browser=await chromium.launch({headless:false,channel:'msedge'})
    const page =await browser.newPage()
    await page.goto("https://www.amazon.com")
    await page.close()
})

test("duplicate words",async()=>{
    let words:string[]=["zim","ban","aus","zim","ban"]

    let seenwords=new Set<String>
    let duplicateWords=new Set<String>
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

test("factorial",async()=>{
    let factorial=1
    let n=5
    for(let i=1;i<=n;i++)
    {
        factorial*=i
    }
    console.log(factorial)
})

test("secondsmall",async()=>{
    let arr:number[]=[4,3,5,1]
    let smallest:number=Number.MAX_SAFE_INTEGER
    let secondSmallest:number=Number.MAX_SAFE_INTEGER

    for(let i=1;i<=arr.length;i++)
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

test("reversewords",async()=>{
 let input:string="Test Automation"
 let words:string[]=input.split(" ")
 let reverseSentence=""
 for(const word of words)
 {
    let reverseWord=word.split("").reverse().join("")
    reverseSentence+=reverseWord+" "    
    
 }
 console.log(reverseSentence)
})

test("duplicate occ",async()=>{
    let input="selenium l"
    let c:string[]=input.split('')
    for(let i=0;i<c.length;i++)
    {
        let count=1
        for(let j=i+1;j<c.length;j++)
        {
            if(c[i]===c[j] && c[j]!==' ')
            {
                count++
                c[j]='0'    
            }
        }
        if(count>1 && c[i]!=='0')
        {
            console.log(count+" "+c[i])
        }
    }
})

test("sort wors",async()=>{
    let c:string[]=["zim","aus","canda","ban"]
    let a:string=""
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



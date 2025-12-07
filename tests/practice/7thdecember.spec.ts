import {test,expect} from '@playwright/test'
import { chromium } from '@playwright/test'
import {format} from 'date-fns'

test("browser",async({})=>{
  const browser=await chromium.launch({headless:false,channel:'chrome'})
  const page =await browser.newPage()
  await page.goto('https://www.amazon.com')
  await page.close()

})

test("duplicate words",async({})=>{
let words:string[]=["zim","ban","aus","zim","ban"]

const seenwords=new Set<String>();
const duplictewords=new Set<String>();

for(const word of words)
{
    if(seenwords.has(word))
    {
        
        duplictewords.add(word)
    }
    else{
        seenwords.add(word)
    }
}
console.log(duplictewords)

})

test("factorial",async({})=>{
let factorial:number=1
let n:number=5

for(let i=1;i<=n;i++)
{
    factorial*=i
}
console.log(factorial)
})

test("second smallest",async({})=>{
let arr:number[]=[5,2,31,1]
let smallest:number=Number.MAX_SAFE_INTEGER
let secondSmallest=Number.MAX_SAFE_INTEGER
for(let i=1;i<arr.length;i++)
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

test("pyramid",async({})=>{

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

test("all",async({})=>{


})
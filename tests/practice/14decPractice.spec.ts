import { test } from '@playwright/test'
import { chromium } from '@playwright/test'

test("brwser launch", async () => {
    const browser = await chromium.launch({ headless: false, channel: 'chrome' })

    const page = await browser.newPage()

    await page.goto("https://www.amazon.com")

    await page.close()

})

test("two tab launchs", async ({ context }) => {

    const page1 = await context.newPage()

    const page2 = await context.newPage()

    await page1.goto("https://www.amazon.com")


    await page2.goto("https://www.yatra.com")

    await page2.bringToFront()

    await page1.close()
    await page2.close()

})

test("dupli words", async () => {
  const words:string[]=["aus","zim","ban","aus","zim"]

  let seenwords=new Set<String>()
  let duplicateWords=new Set<String>()

  for(const word of words)
  {
    if(seenwords.has(word))
    {
        duplicateWords.add(word)
    }
    else{
        seenwords.add(word)
    }
  }
  console.log(duplicateWords)
  console.log(duplicateWords.size)

})

test("al1", async () => {
  let factorial=1
  let n=5
  for(let i=1;i<=n;i++)
  {
    factorial*=i
  }
  console.log(factorial)


})

test("second largest", async () => {
  let arr:number[]=[23,45,5,6,7,8]

  let largest=Number.MIN_SAFE_INTEGER
  let secondLargest=Number.MIN_SAFE_INTEGER

  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]>largest)
    {
        secondLargest=largest
        largest=arr[i]
    }
    else if(arr[i]>secondLargest && arr[i]!=largest)
    {
        secondLargest=arr[i]
    }
  }
  console.log(secondLargest)

})

test("pyramiddec14", async () => {
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
        line+="#"
    }
    console.log(line)
  }

})

test("reversewordsdec14", async () => {
  let input:string="Test Automation"
  let words:string[]=input.split(' ')
  let reverseSentence=""
  for(const word of words)
  {
    let reverseWords=word.split("").reverse().join("")
     reverseSentence+=reverseWords+" "
  }
  console.log(reverseSentence)

})

test("rev words pat2", async () => {
  let input:string="India is my country"

  let words:string[]=input.trim().split(/\s+/)

  let revwords:string[]=words.reverse()

  let result:string=revwords.join(" ")

  console.log(result)

})

test("dupli occur", async () => {
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

test("all occurence", async () => {
   let input:string="selenium lemm"

   let charCounts:Map<string,number>=new Map()

   for(let i=0;i<input.length;i++)
   {
    let char:string=input[i]
    if(charCounts.has(char))
    {
        charCounts.set(char,charCounts.get(char)!+1)
    }
    else{
        charCounts.set(char,1)
    }
   }

   charCounts.forEach((count,char)=>{
    console.log(`${char} : ${count}`)
   })
   
   
    
})

test("dec19 revmpjasisi", async () => {
  let input:string="India is great"

  let cleanInput=input.trim().split(/\s+/g)

  let revSent=cleanInput.reverse().join(" ")
  console.log(revSent)

    
})

test("dec19 palin", async () => {
  let input:string="ata ata"

  let cleanInput=input.toLowerCase().replace(/[^a-z0-9]/,"")

  let revsent=cleanInput.split("").reverse().join("")

  console.log(revsent)

  let gloablpalin:Boolean=cleanInput===revsent

  console.log(gloablpalin)

    
})
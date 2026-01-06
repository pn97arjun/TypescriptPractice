import { test, expect } from "@playwright/test";
import { chromium } from "@playwright/test";
import { count } from "console";
import { el, tr } from "date-fns/locale";
import {format} from 'date-fns'



test.describe.configure({mode:'serial'})

test("launch browser", async ({ }) => {
    const browser = await chromium.launch({ headless: true, channel: 'msedge' })
    const page = await browser.newPage()
    await page.goto("https://www.amazon.com")
    await page.close()

})
test("duplicate words", async ({  }) => {
    const words: string[] = ["zim", "aus", "zim", "ban", "canada", "ban", "aus"]

    let seenWords = new Set<String>()
    let duplicateWords = new Set<String>()

    for (const word of words) {
        if (seenWords.has(word)) {
            duplicateWords.add(word)
        }
        else {
            seenWords.add(word)
        }
    }
    console.log(duplicateWords)
    console.log(duplicateWords.size)


})

test("factorial", async ({ }) => {
    let factorial = 1
    let n = 5
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    console.log(factorial)
})


test("second smallest", async ({ }) => {
    let arr: number[] = [2, 1, 6, 8]
    let smallest = Number.MAX_SAFE_INTEGER
    let secondSamllest = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSamllest = smallest
            smallest = arr[i]
        }
        else if (arr[i] < secondSamllest && arr[i] != smallest) {
            secondSamllest = arr[i]
        }
    }
    console.log(secondSamllest)
})


test("pyramid", async ({ }) => {
    let rows = 5
    for (let i = 1; i <= rows; i++) {
        let line = ""
        for (let j = i; j < rows; j++) {
            line += " "
        }
        for (let k = 1; k <= (2 * i) - 1; k++) {
            line += "*"
        }
        console.log(line)
    }
})

test("reverse words 18dec", async ({ }) => {
    let input = "Test Automation"
    let words = input.split(' ')
    let reverseSentence = ""
    for (const word of words) {
        let reverseWord = word.split("").reverse().join("")
        reverseSentence += reverseWord + " "
    }
    console.log(reverseSentence)
})

test("reverse string", async ({ }) => {
    let str = "malayalaml"
    let revstr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revstr += str.charAt(i)
    }
    console.log(revstr)
})

test("reverse from last", async ({ }) => {
    let input: string = "India is my county"

    let splitSent: string[] = input.trim().split(/\s+/)

    let reverseSent: string[] = splitSent.reverse()

    let result = reverseSent.join(" ")

    console.log(result)
})

test("dupli occur", async ({ }) => {
    let input = "selenium lem"
    let c = input.split('')
    for (let i = 0; i < c.length; i++) {
        let count = 1
        for (let j = i + 1; j < c.length; j++) {

            if (c[i] === c[j] && c[j] != ' ') {
                count++;
                c[j] = '0'
            }
        }
        if (count > 1 && c[i] !== '0')
            console.log(c[i] + " " + count)
    }

})

test("all occdec18", async ({ }) => {
    let input = "selenium lem"

    let charCounts: Map<string, number> = new Map()

    for (let i = 0; i < input.length; i++) {
        let char: string = input[i]
        if (charCounts.has(char)) {
            charCounts.set(char, charCounts.get(char)! + 1)
        }
        else {
            charCounts.set(char, 1)
        }
    }
    charCounts.forEach((count, char) => {
        console.log(`${char} : ${count}`)
    })

})

test("intersection of array", async ({ }) => {
    let arr1: number[] = [1, 2, 3, 4, 5]
    let arr2: number[] = [4, 5, 6, 7, 8]

    let intersection: number[] = arr1.filter(element => {
        return arr2.includes(element)
    })
    console.log(intersection)
})

test("sort words", async ({ }) => {
    let c: string[] = ["ban", "zim", "den", "aus"]
    let a = ""
    for (let i = 0; i < c.length; i++) {

        for (let j = i + 1; j < c.length; j++) {
            if (c[i] > c[j]) {
                a = c[i]
                c[i] = c[j]
                c[j] = a
            }
        }
    }
    for (let i = 0; i < c.length; i++) 
        console.log(c[i])

})


test("sort nodec18", async ({ }) => {
let c:number[]=[3,4,5,6,9,2,1,7]
let temp:number
 for (let i = 0; i < c.length; i++) {

        for (let j = i + 1; j < c.length; j++) {
            if(c[i]>c[j])
            {
                temp=c[j]   
                c[j]=c[i]
                c[i]=temp 
            }
        }
    }

     for (let i = 0; i < c.length; i++)
        console.log(c[i])

})



test("duplicate nodec18", async ({ }) => {
let c:number[]=[3,4,9,1,5,6,9,2,1,7,4,3]
 for (let i = 0; i < c.length; i++) {

        for (let j = i + 1; j < c.length; j++) {
            if(c[i]===c[j])
            {
                console.log(c[j])
            }
        }
    }
})

test("duplicate arraydec18", async ({ }) => {
let c:number[]=[3,4,9,1,5,6,9,2,1,7,4,3,8]

let arrayset=[... new Set(c)]
console.log(arrayset)
})

test("primedec18", async ({ }) => {
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
    console.log("Prime")
else
    console.log("not prime")
})

test("fibbodec18", async ({ }) => {
let f1=0,f2=1,n=10
let f3:number
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
test("palindec18", async ({ }) => {
let n=141,r=0,sum=0
let temp:number
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
    console.log("palin"+sum)
})

test("datedec18", async ({ }) => {
 const date=new Date()
 const datestr=format(date,"dd/MM/yyyy")
 console.log(datestr)
})

test("white spcdec18", async ({ }) => {
const str="h w i"
const replstr=str.replace(/\s/g,"")
console.log(replstr)

})

test("swap strdswapec18", async ({ }) => {
let a="how"
let b="you"
a=a+b
b=a.substring(0,a.length-b.length)
a=a.substring(b.length)

console.log(a+" "+b)
})

test.beforeEach("before test",async()=>{
console.log("setting env")
})

test.afterEach("After test",async()=>{
    console.log("closing browser")
})

test("globalpalin", async ({ }) => {
let input:string="malayalam"

let cleaninput=input.toLowerCase().replace(/[^a-z0-9]/,"")

let revsetnt=cleaninput.split("").reverse().join("")

let globalpalin:Boolean=cleaninput===revsetnt

console.log(`${globalpalin}`)
})

test("rev mpahsis", async ({ }) => {
let input:string="India is great"

let cleaninput=input.trim().split(/\s+/g)
let rev=cleaninput.reverse().join(" ")

console.log(rev)
})
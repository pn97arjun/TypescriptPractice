import { test } from '@playwright/test'
import { format } from 'date-fns'
import { chromium } from '@playwright/test'

test("import browser", async ({ }) => {
    const browser = await chromium.launch({ headless: false, channel: 'msedge' })
    const page = await browser.newPage()
    await page.goto("https://www.amazon.com")
    await page.close()
})

test("duplicate words", async () => {
    let words: string[] = ["zim", "ban", "aus", "zim", "ban"]

    let seenwords = new Set<String>
    let duplicateWords = new Set<String>
    for (const word of words) {
        if (seenwords.has(word)) {
            duplicateWords.add(word)
        }
        else {
            seenwords.add(word)
        }
    }
    console.log(duplicateWords)


})

test("factorial", async () => {
    let factorial = 1
    let n = 5
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    console.log(factorial)
})

test("secondsmall", async () => {
    let arr: number[] = [4, 3, 5, 1]
    let smallest: number = Number.MAX_SAFE_INTEGER
    let secondSmallest: number = Number.MAX_SAFE_INTEGER

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest
            smallest = arr[i]
        }
        else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i]
        }

    }
    console.log(secondSmallest)

})

test("pyramid", async () => {
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

test("reversewords", async () => {
    let input: string = "Test Automation"
    let words: string[] = input.split(" ")
    let reverseSentence = ""
    for (const word of words) {
        let reverseWord = word.split("").reverse().join("")
        reverseSentence += reverseWord + " "

    }
    console.log(reverseSentence)
})

test("duplicate occurence", async () => {
    let input = "selenium l"
    let c: string[] = input.split('')
    for (let i = 0; i < c.length; i++) {
        let count = 1
        for (let j = i + 1; j < c.length; j++) {
            if (c[i] === c[j] && c[j] !== ' ') {
                count++
                c[j] = '0'
            }
        }
        if (count > 1 && c[i] !== '0') {
            console.log(count + " " + c[i])
        }
    }
})

test("sort wors", async () => {
    let c: string[] = ["zim", "aus", "canda", "ban"]
    let a: string = ""
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

test("primeno", async () => {
    let num = 13
    let temp: number
    let prime: Boolean = true;
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        temp = num % i
        if (temp == 0) {
            prime = false;
            break;
        }
    }
    if (prime)
        console.log("prine " + num)
    else
        console.log("not prine " + num)
})

test("duplicate elements", async () => {
    let arr: number[] = [4, 3, 2, 1, 5, 4, 1]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                console.log(arr[j])
            }
        }
    }
})

test("reverse elements", async () => {
    let arr: number[] = [5, 4, 3, 2, 1]
    for (let i = arr.length - 1; i >= 0; i--)
        console.log(arr[i])
})

test("srtno", async () => {
    let arr: number[] = [4, 1, 3, 5, 2]
    let temp: number
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i])


})

test("reverset", async () => {
    let str: string = "malayalaml"
    let revstr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revstr += str.charAt(i)
    }
    console.log(revstr)
})
test("fibbo", async () => {
    let f1 = 0, f2 = 1, n = 10
    let f3: number
    console.log(f1)
    console.log(f2)
    for (let i = 1; i <= n; i++) {
        f3 = f1 + f2
        console.log(f3)
        f1 = f2
        f2 = f3
    }
})
test("whitespc",async()=>{
    let str="how you i"
    let repstr=str.replace(/\s/g,"")
    console.log(repstr)
})

test("swap str",async()=>{
    let a="how"
    let b="you"
    a=a+b
    b=a.substring(0,a.length-b.length)
    a=a.substring(b.length)
    console.log(a+" "+b)
})

test("datedec1",async()=>{
const date=new Date()
const datefrm=format(date,"dd/MM/yyyy")
console.log(datefrm)
})
test("palindec1",async()=>{
let n=141,sum=0,r=0
let temp:number
temp=n
while(n>0)
{
    r=n%10
    sum=(sum*10)+r
    n=Math.floor(n/10)
}

if(temp===sum)
    console.log("Palindrom: "+sum)
else
    console.log("Not Palindrom: "+sum)
})

test("All occurence",async()=>{
    let input:string="selenium lem"

    let charCounts:Map<string,number>=new Map()

    for(let i=0;i<input.length;i++)
    {
        let char:string=input[i]
        if(charCounts.has(char))
        {
            charCounts.set(char,charCounts.get(char)! +1)
        }
        else
        {
            charCounts.set(char,1)
        }
    }
    console.log("all occuence")
    charCounts.forEach((count,char)=>{
        console.log(`${char} : ${count}`)
    })
})

test("intersection of array",async()=>{
    let arr1:number[]=[1,2,3,4,5]
    let arr2:number[]=[4,5,6,7,8]

    let intersetion:number[]=arr1.filter(element=>{
       return arr2.includes(element)
    })

    console.log(`intersection: ${intersetion}`)
})

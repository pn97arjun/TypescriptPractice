import {test,expect} from '@playwright/test'
import { chromium } from '@playwright/test'
import {format} from 'date-fns'
test("browser launch",async()=>{
    const browser=await chromium.launch({headless:false,channel:'msedge'})
    const page= await browser.newPage()
    await page.goto("https://www.amazon.com")
    await page.close()
})

test("duplicate words",async()=>{
    let words:string[]=["aus","zim","ban","aus","zim"]

    let seenWords=new Set<String>();
    let duplicateWords=new Set<String>();

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
let arr:number[]=[2,5,4,3,26,1]
let smallest:number=Number.MAX_SAFE_INTEGER
let secondSamllest:number=Number.MAX_SAFE_INTEGER

for(let i=0;i<arr.length;i++)
{
    if(arr[i]<smallest)
    {
        secondSamllest=smallest
        smallest=arr[i]
    }
    else if(arr[i]<secondSamllest && arr[i]!==smallest)
    {
        secondSamllest=arr[i]
    }
}
console.log(secondSamllest)

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

test("reverese words",async()=>{
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


test("duplictoccurence character",async()=>{
let input:string="selenium lme"
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
        console.log(count+" "+c[i])
}

})

test("all occurence",async()=>{
let input:string="selenium lem"

let charCounts:Map<string,number>=new Map()

for(let i=0;i<input.length;i++)
{
    let char:string=input[i]
    if(charCounts.has(char))
    {
        charCounts.set(char,charCounts.get(char)! +1)
    }
    else{
        charCounts.set(char,1)
    }
}
charCounts.forEach((count,char)=>{
  console.log(`${char} : ${count}`)
})

})

test("intersection array",async()=>{
  let arr1:number[]=[1,2,3,4,5,6]
  let arr2:number[]=[5,6,7,8,9,10]

  let intersection:number[]=arr1.filter(element=>{
    return arr2.includes(element)
  })
console.log(intersection)

})

test("sort words",async()=>{
let c:string[]=["zim","ban","aus","canada","melhi","delhi"]
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

test("prime no",async()=>{
let num=13
let prime:Boolean=true;
let temp:number

for(let i=2;i<=Math.floor(num/2);i++)
{
    temp=num%i
    if(temp===0)
    {
        prime=false
        break;
    }
}
if(prime)
    console.log("prime "+num)
else
   console.log("not prime"+num)
})

test("duplicate ele",async()=>{
    let arr:number[]=[4,3,5,3,1,2,4]
    for(let i=0;i<arr.length;i++)
    {
         for(let j=i+1;j<arr.length;j++)
         {
            if(arr[i]===arr[j])
                console.log(arr[j])
         }
    }
})
test("reverseele",async()=>{
let str:string="malayalaml"
let revstr=""
for(let i=str.length-1;i>=0;i--)
{
    revstr+=str.charAt(i)
}
console.log(revstr)

})


test("sortno",async()=>{
let arr:number[]=[4,5,3,1,2,6]
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

test("white spc",async()=>{
let input:string="how u i"
let replstr=input.replace(/\s/g," ")
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

test("date str",async()=>{
const date=new Date()
const dateStr=format(date,"d/MM/yyyy")
console.log(dateStr)
})
test("palindrome",async()=>{
    let n=151,sum=0,r=0
    let temp:number
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

test("remove duplicates",async()=>{
let arr:number[]=[1,2,2,3,3,4,5,4,6]
let uniqueArray=[...new Set(arr)];
console.log(uniqueArray)
})

function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let left = 0; // Left pointer of the window
    // Map to store the last seen index of each character
    const charIndexMap = new Map<string, number>();

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If the character is already in the map and its last index is within the current window
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar)! >= left) {
            // Move the left pointer past the last occurrence of the repeated character
            left = charIndexMap.get(currentChar)! + 1;
        }

        // Update the map with the current character's new index
        charIndexMap.set(currentChar, right);

        // Calculate the current window's length and update max length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

test("length of longest substring",async()=>{
const maxlength=lengthOfLongestSubstring("abcdabcbb")
console.log(maxlength)
})
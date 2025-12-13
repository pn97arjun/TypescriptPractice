import {test} from '@playwright/test'

test("dupli word",async()=>{
    let words:string[]=["zim","asus","bang","zim"]

    let duplicateWords=new Set<String>()
    let seenwords=new Set<String>()

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
})

test("remove duplicate",async()=>{
    let arr:number[]=[1,2,2,3,4,4,3,5,6,6,7]
    let uniarray=[... new Set(arr)]
    console.log(uniarray)
})

function lengthlonestsubstring(s:string):number{
    let maxlength=0;
    let left=0;
    let charIndexMap:Map<string,number>=new Map()

    for(let right=0;right<s.length;right++)
    {
        let char:string=s[right]

        if(charIndexMap.has(char) && charIndexMap.get(char)!>=left)
        {
           left=charIndexMap.get(char)!+1
        }
        charIndexMap.set(char,right)

        maxlength=Math.max(maxlength,right-left+1)

    }
    return maxlength;

}
test("maxlength",async()=>{
    const maxLength=lengthlonestsubstring("abcdabcbb")
    console.log(maxLength)
})

test("all occurence pg",async()=>{
    let input:string="selenium lem"

    let charSetmap:Map<string,number>=new Map()

    for(let i=0;i<input.length;i++)
    {
        let char:string=input[i]

        if(charSetmap.has(char) )
        {
            charSetmap.set(char,charSetmap.get(char)!+1)
        }
        else{
            charSetmap.set(char,1)
        }
    }

    charSetmap.forEach((count,char)=>{
        console.log(`${char} : ${count}`)
    })
})

test("reverse word",async()=>{
  let input:string="India is my country"

  let words:string[]=input.trim().split(/\s+/)

  let reverseWord:string[]=words.reverse()

  let result:string=reverseWord.join(" ")

  console.log(result)
})



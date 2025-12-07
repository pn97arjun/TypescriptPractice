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


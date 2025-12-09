import {test} from '@playwright/test'

test("code",async()=>{
    
    const num=highestNo()
    console.log(num)
   

})

function highestNo():number
{
let arr:number[]=[25,13,2,9,13,23,1]  
    let highest:number=Number.MIN_SAFE_INTEGER
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>highest)
        {
            highest=arr[i]
        }
    }
   return highest
}
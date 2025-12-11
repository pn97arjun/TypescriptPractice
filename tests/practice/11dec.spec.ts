import {test} from '@playwright/test'

function asyncCode(){
setTimeout(()=>{console.log("task 1")},1000)

console.log("Task 2")
console.log("Task 3")
}

test("all",()=>{
    asyncCode()
})

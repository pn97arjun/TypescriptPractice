import {test,expect} from '@playwright/test'



test("apitests",async({request})=>{

    const resp=await request.get("https://jsonplaceholder.typicode.com/posts/1")
    const responseBody=await resp.json()
    const resHeader=await resp.headers()
    const respHeaderArray=resp.headersArray()
    const resStatus=resp.status()
    const respStatusText=resp.statusText()
    expect(responseBody).toHaveProperty("userId",1)
    expect(responseBody.body).toContain("quia et suscipit")
    //console.log(respStatusText)
    //expect(resStatus).toBe(200)
    //expect(respStatusText).toBe('OK')
    //expect(resp.ok()).toBeTruthy()
    //console.log(respHeaderArray)
    //console.log(resHeader)
    //console.log(responseBody);
    

})
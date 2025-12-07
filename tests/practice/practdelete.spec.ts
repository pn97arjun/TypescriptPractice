import {test,expect} from '@playwright/test'
import { request } from 'http'

test("get request",async({request})=>{
    const resp=await request.get("https://jsonplaceholder.typicode.com/posts/1",
    )
    console.log(resp.status())
    console.log(resp.statusText())


    const respBody=await resp.json()
    console.log(respBody)
    expect(respBody).toHaveProperty("userId",1)
    expect(respBody.title).toContain('sunt')
})

test("post req",async({request})=>{
   const bookingData = {
        "firstname": "Arjun",
        "lastname": "ey",
        "totalprice": 404,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2013-02-23",
            "checkout": "2014-10-23"
        },
        "additionalneeds": "nodrug"
    }
    const resp=await request.post("https://restful-booker.herokuapp.com/booking",{
        headers:
        {
             "Content-Type": "application/json"
        },
        data:bookingData

    })

    const respBody=await resp.json()
    console.log(respBody)
    console.log("booking: "+respBody.bookingid)
    expect(respBody.bookingid).not.toBeNull()
})

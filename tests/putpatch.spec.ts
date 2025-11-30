import { test, expect } from '@playwright/test'

test("put example", async ({ request }) => {
    const authdata = {
        "username": "admin",
        "password": "password123"
    }
    const response = await request.post("https://restful-booker.herokuapp.com/auth",{ headers: {
        "Content-Type": "application/json"
    },
        data:authdata
    })

    const responseBody=await response.json()
    const tokendata=responseBody.token
    console.log(tokendata)

})
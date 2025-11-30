import { test, expect } from '@playwright/test'


test("Post request", async ({ request }) => {

    const response = await request.post("https://restful-booker.herokuapp.com/auth", {
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            "username": "admin",
            "password": "password123"
        }
    })
    //console.log(response.status())
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    console.log(responseBody)
    expect(responseBody.token).not.toBeNull()



})

test("booking idpost", async ({ request }) => {
    const bookingData = {
        "firstname": "Arjun",
        "lastname": "Brownie",
        "totalprice": 333,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2013-02-23",
            "checkout": "2014-10-23"
        },
        "additionalneeds": "srinks"
    }
    const response = await request.post("https://restful-booker.herokuapp.com/booking", {
        headers: {
            "Content-Type": "application/json"
        },
        data: bookingData
    })
    const responseBody = await response.json()
    console.log(responseBody)
    expect(responseBody.bookingid).not.toBeNull()
    expect(responseBody.booking.firstname).toContain("Arj")
})
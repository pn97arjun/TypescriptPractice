import { test, expect } from '@playwright/test'
test("delete example", async ({ request }) => {
    const tokenData = {
        "username": "admin",
        "password": "password123"
    }
    const tokenresponse = await request.post("https://restful-booker.herokuapp.com/auth", {
        headers: {
            "Content-Type": "application/json"
        },
        data: tokenData
    })
    const tokenResponse = await tokenresponse.json()
    const tokenId=tokenResponse.token
    console.log("token: " + tokenId)

    console.log("*********Creating BOOking******")
    const bookingData = {
        "firstname": "Nathr",
        "lastname": "godsa",
        "totalprice": 312,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2025-01-01",
            "checkout": "2025-01-01"
        },
        "additionalneeds": "Hik opops"
    }
    const bookingResp = await request.post("https://restful-booker.herokuapp.com/booking", {
        headers: {
            "Content-Type": "application/json"
        },
        data: bookingData
    })

    const bookjson = await bookingResp.json()
    console.log(bookjson)
    const bookingID=bookjson.bookingid
    console.log("Booking id " + bookingID)

    console.log("*********Delete BOOking******")

    const deleteResponse=await request.delete("https://restful-booker.herokuapp.com/booking/"+bookingID,{
        headers:{
            "Content-Type":"application/json",
            "Cookie":"token="+tokenId
        }
    })

    console.log(deleteResponse.statusText())
    console.log(deleteResponse.status())

    const getBookingres=await request.get("https://restful-booker.herokuapp.com/booking/"+bookingID,{
   
        
    })
    console.log("********After deleting******")
    console.log(getBookingres.status())
    console.log(getBookingres.statusText())


})
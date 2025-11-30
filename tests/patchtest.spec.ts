import { test, expect } from '@playwright/test'

test("patch example", async ({ request }) => {
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
    console.log("Token "+tokendata)
    
    const bookdata={
    "firstname" : "Aryuu",
    "lastname" : "pn",
    "totalprice" : 312,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2025-01-01",
        "checkout" : "2025-01-01"
    },
    "additionalneeds" : "drinki"
}
    const newBookingId=await request.post("https://restful-booker.herokuapp.com/booking",{
        headers:{
            "Content-Type":"application/json"
        },
        data:bookdata
    })

    const bookingIsjson=await newBookingId.json()
    console.log(bookingIsjson)

    const bookinid=await bookingIsjson.bookingid

    console.log('New booking id: '+bookinid)

    const updatdbooking={
    "firstname" : "Fazal",
    "lastname" : "Azerine"
    
}

const updatedResponse=await request.patch("https://restful-booker.herokuapp.com/booking/"+bookinid,{
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Cookie":"token="+tokendata
    },
    data:updatdbooking
})

const updatedResponsejson=await updatedResponse.json()

console.log(updatedResponsejson)


})
import {test,expect} from '@playwright/test'
import fs from 'fs'

test("Creatin Booking with file",async({request})=>{
    const fileBooking=fs.readFileSync("testdata/booking.json", "utf-8")

    const jsonFile=JSON.parse(fileBooking)
    const response=await request.post("https://restful-booker.herokuapp.com/booking",{
        headers:{
            "Content-Type":"application/json"
        },
        data:jsonFile
    })

    const responseJson=await response.json()

    console.log(responseJson)
    console.log("booking id "+responseJson.bookingid)
    console.log("firstnane "+responseJson.booking.firstname)
})
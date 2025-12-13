import { test, expect } from '@playwright/test'

test.skip("health", async ({ request }) => {
    test.setTimeout(0)
    while (true) {
        const start = Date.now()
        const response = await request.get("https://restful-booker.herokuapp.com/ping")
        const end = Date.now()
        const duration = end - start
       

        if(duration>100)
        {
            throw new Error(`Api slow ${duration}`)
        }
        else{
            console.log(`Total duration ${duration}`)
        }

        const statusesp = response.status()

        console.log(statusesp)

        expect(statusesp).toBe(201)
    }
})
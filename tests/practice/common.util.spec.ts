import { test } from '@playwright/test'
import * as path from 'path'
test("file upload", async ({ page }) => {
    const locator = page.locator("#buttonUpload")

    const filepath = path.join(__dirname, 'upload/file1.png')

    await locator.setInputFiles(filepath)
})

test("switch tab", async ({ page, context }) => {

    const locator = page.locator("#buttonUpload")
    const pagePromise = await context.waitForEvent('page')
    await locator.click()
    const newPage = await pagePromise
    await newPage.waitForLoadState('load')

    //actions
    await newPage.bringToFront()
    //actions


})

test("open two tabs", async ({ context }) => {

    const page1 = await context.newPage()

    const page2 = await context.newPage()

    await page1.goto("https://www.amazon.com")

    await page2.goto("https://www.yatra.com")

    await page1.bringToFront()
    await page2.bringToFront()

    await page1.close()
    await page2.close()



})
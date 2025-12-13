import { test as base } from '@playwright/test'

type Myfixtures = {

  login: any

}

export const test = base.extend<Myfixtures>({

  login: async ({ }, use: any) => {

    console.log("before")
    await use()
    console.log("after")

  }
})
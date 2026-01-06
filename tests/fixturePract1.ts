import{test as base} from '@playwright/test'

type Myfixtures2={

    Rlogin:any
}

export const test=base.extend<Myfixtures2>({

    Rlogin: async({},use:any)=>{
        console.log("before")
        await use()
        console.log("after")
    }
})
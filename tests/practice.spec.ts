import { test } from '@playwright/test'
import { format } from 'date-fns';
test("second smallest", async ({ }) => {

    const arr: number[] = [4, 2, 1, 3, 5];
    let smallest: number = Number.MAX_SAFE_INTEGER;
    let secondSmallest: number = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        }
        else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }
    console.log(`Second smallest ${secondSmallest}`)

})

test("palindome", async ({ }) => {
    let temp: number, n = 141, sum = 0, r = 0;
    temp = n;
    while (n > 0) {
        r = n % 10;
        sum = (sum * 10) + r;
        n = Math.floor(n / 10)
    }
    if (temp === sum)
        console.log(`Palindrome: ${sum}`)
    else
        console.log(`Not Palindrome: ${sum}`)
})

test("date pg", async ({ }) => {
    const date = new Date();
    const dateStr = format(date, "dd/MM/yyyy")
    console.log(dateStr)
})

test("swap no", async ({ }) => {
    let a = 5, b = 10
    a = a + b;//15
    b = a - b;//5
    a = a - b;//10
    console.log(a + " " + b)

})
test("swap string", async () => {
    let a: string = "how";
    let b: string = "you"
    a = a + b;
    b = a.substring(0, a.length - b.length)
    a = a.substring(b.length)
    console.log(a + " " + b)
})
test("white space", async () => {
    let str: string = "how you i"
    let replstr: string = str.replace(/\s/g, "")
    console.log(replstr)

})
test("fibo", async () => {
    let f1 = 0, f2 = 1, n = 10;
    let f3: number
    console.log(f1)
    console.log(f2)
    for (let i = 1; i <= 10; i++) {
        f3 = f1 + f2;
        console.log(f3 + " ")
        f1 = f2;
        f2 = f3;
    }
})
test("reverse", async () => {
    let str: string = "malayalaml"
    let rev: string = ""
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str.charAt(i)
    }
    console.log(rev)
})

test("sortno", async () => {
    const arr: number[] = [4, 2, 3, 1, 5]
    let temp: number
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i] + " ")

})
test("reverse element", async () => {
    const arr: number[] = [1, 2, 3, 4, 5]
    for (let i = arr.length - 1; i >= 0; i--)
        console.log(arr[i] + " ")
})

test("duplicateelementsarray", async () => {
    const arr: number[] = [1, 1, 2, 2, 3, 4, 4]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                console.log(arr[j])
            }
        }
    }
})

test("primeno", async () => {
    let num: number = 15;
    let temp: number;
    let prime: Boolean = true;
    for (let i = 2; i <= num / 2; i++) {
        temp = num % i;
        if (temp === 0) {
            prime = false;
            break;
        }
    }
    if (prime)
        console.log("Prime no: " + num)
    else
        console.log("Not a prime: " + num)
})

test("sortwords", async () => {
    let c: string[] = ["zim", "bang", "aus", "canada"];
    let a: string = "";
    for (let i = 0; i < c.length; i++) {
        for (let j = i + 1; j < c.length; j++) {
            if (c[i] > c[j]) {
                a = c[i];
                c[i] = c[j];
                c[j] = a;
            }
        }
    }
    for (let i = 0; i < c.length; i++)
        console.log(c[i] + " ")
})

test("duplicatOccurence", async () => {
    let str: string = "selenium l";
    let c: string[] = str.split('')
    for (let i = 0; i < c.length; i++) {
        let count: number = 1
        for (let j = i + 1; j < c.length; j++) {
            if (c[i] === c[j] && c[j] !== ' ') {
                count++;
                c[j] = '0';
            }
        }
        if (count > 1 && c[i] !== '0')
            console.log(count + " " + c[i])
    }

});

test("reverseword", async () => {
    const input: string = "Test Automation";
    const words: string[] = input.split(" ")
    let reverseSentence: string = ""
    for (const word of words) {
        const reverseWord: string = word.split("").reverse().join("")
        reverseSentence += reverseWord + " "
    }
    console.log(reverseSentence)


})

test("pyramid", async () => {
    let rows: number = 5;
    for (let i = 1; i <= rows; i++) {
        let line = ''
        for (let j = i; j < rows; j++) {
            line += ' '
        }
        for (let k = 1; k <= (2 * i) - 1; k++) {
            line += '*'
        }
        console.log(line)
    }
})

test("secondsmallest", async () => {
    let arr: number[] = [4, 3, 2, 1]
    let smallest: number = Number.MAX_SAFE_INTEGER
    let secondsmallest: number = Number.MAX_SAFE_INTEGER
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondsmallest = smallest;
            smallest = arr[i];
        }
        else if (arr[i] < secondsmallest && arr[i] !== smallest) {
            secondsmallest = arr[i]
        }
    }
    console.log(secondsmallest)
})

test("factorial", async () => {
    let n: number = 5
    let factorial: number = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    console.log(factorial)
})

test("dupliactewords", async () => {
    const c: string[] = ["aus", "zim", "ban", "zim", "ban", "canada"]

    const seenwords = new Set<String>();
    const dupliactewords = new Set<String>();

    for (const word of c) {
        if (seenwords.has(word)) {
            dupliactewords.add(word)
        }
        else {
            seenwords.add(word)
        }
    }
    console.log(dupliactewords)
})

test("interfacepg", async () => {
    interface Myinterface {
        propertyA: string;
        propertyB: string;
        myfunction(message: string): void;
    }

    class Myclass implements Myinterface {
        propertyA: string;
        propertyB: string;
        constructor(a: string, b: string) {
            this.propertyA = a;
            this.propertyB = b;
        }
        myfunction(message: string): void {
            console.log(`${message}`)
            console.log(`${this.propertyA}`)
            console.log(`${this.propertyB}`)
        }
    }
    const myobject:Myinterface=new Myclass("value1","value2")
    myobject.myfunction("Melcow")

});

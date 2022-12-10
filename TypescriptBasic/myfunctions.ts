function addTwo(num: number): number {
  // num.toUpperCase() -- error
  return num + 2
  // return "hello" -- error
}

function getUpper(val: string) {
  return val.toUpperCase()
}

function signUser(name: string, email: string, isPaid: boolean) {}

const loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper("rahman")
signUser("rahman", "rahman@gmail.com", false)
loginUser("r", "r@r.com")

// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true
//   }
//   return "200 OK" -- error
// }

// function getValue(myVal: number): string {
//   if (myVal > 5) {
//     return true -- error
//   }
//   return "200 OK"
// }

const getHello = (s: string): string => {
  return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
  return `hero is %{hero}`
  // return 1  -- error
})

function consoleError(errmsg: string): void {
  console.log(errmsg)
}

function handleError(errmsg: string): never {
  throw new Error(errmsg)
}

export {}

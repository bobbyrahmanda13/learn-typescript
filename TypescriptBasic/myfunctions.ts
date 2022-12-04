function addTwo(num: number) {
  // num.toUpperCase() -- error
  // return num + 2
  return "hello"
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

export {}

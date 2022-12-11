// start
// const user: (string | number)[] = [1, "rv"]
let tUser: [string, number, boolean]

tUser = ["rv", 131, true]
// tUser = [true, 131, "rc"] // error karena harus sesuai dgn format type
// end

// start
let rgb: [number, number, number] = [255, 123, 112]
// end

// start
type User = [number, string]
const newUser: User = [112, "example@la.com"]
newUser[1] = "rv.com"
// newUser.push(true) // error

// end
export {}

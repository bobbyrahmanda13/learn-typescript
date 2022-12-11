//  Type Union adalah speerti kombinasi dari dua atau tiga atau lebih jenis data yang anda bisa, termasuk ke dalam variabel atau array dan apapun itu

// start
let score: number | string = 33
score = 44
score = "55"
// end

// start
type User = {
  name: string
  id: number
}

type Admin = {
  username: string
  id: number
}

let rahman: User | Admin = {
  name: "rahman",
  id: 334,
}
rahman = { username: "br", id: 334 }
// end

//start
getDbId(3)
getDbId("3")
function getDbId(id: number | string) {
  // // making some API calls
  // console.log(`DB id is :${id}`)
  if (typeof id === "string") {
    id.toLowerCase()
  }
}
// end

// Array
// start
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
// const data3: string[] | number[] = ["1", "2", 3] // error
// const data3: (string | number)[] = ["1", "2", 3]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]
// const data4: any[] = ["1", "2", 3, true] // bisa tapi tidak bagus untuk diterapkan jangan hanya menggunakan type any untuk menghilangkan error

// let pi: 3.14 = 3.14
// pi = 3.145 // tidak diperbolehkan menggunakan ini tapi bisa digunakan untuk beberapa kasus constoh seperti dibawah ini:
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew" // error

// end

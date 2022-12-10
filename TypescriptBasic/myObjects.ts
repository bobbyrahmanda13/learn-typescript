// const User = {
//   name: "rahman",
//   email: "rahman@gmail.com",
//   isActive: true,
// }
// function createUser({ name: string, isPaid: boolean }) {}
//
// let newUser = { name: "rahman", isPaid: false, email: "jancok@mail.com" }
//
// createUser(newUser)

// function createCourse(): { name: string; price: number } {
//   return { name: "vuejs", price: 6 }
// }

// type User = {
//   name: string
//   email: string
//   isActive: boolean
// }
//
// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true }
// }
// createUser({ name: "", email: "", isActive: true })

type User = {
  readonly _id: string // tidak bisa di edit karena readonly
  name: string
  email: string
  isActive: boolean
  credcardDetails?: number // optional
}

let myUser: User = {
  _id: "1234",
  name: "r",
  email: "rahman@mail.com",
  isActive: false,
}

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  cardDate: string
}
type cardDetails = cardNumber &
  cardDate & {
    cvv: number
  }

myUser.email = "lalok@gmail.com"
// myUser._id = "asa"

export {}

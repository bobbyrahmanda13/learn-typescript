// class typescript

// export class User {
//   public email: string
//   private name: string
//   readonly city: string = "Jakarta"
//   constructor(email: string, name: string) {
//     this.email = email
//     this.name = name
//     // this.city
//   }
// }

//? Keyword class = class mempunyai public, private, dan protected
export class User {
  // private _courseCount = 1
  protected _courseCount = 1

  readonly city: string = "Padang"
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}

  private deleteToken() {
    console.log("Token Delete")
  }

  // getter class
  get getAppleEmail(): string {
    return `apple${this.email}`
  }
  get courseCount(): number {
    return this._courseCount
  }
  set courseCount(courseNum) {
    // setter no return type
    if (courseNum <= 1) {
      throw new Error("Couse count should be more than 1")
    }
    this._courseCount = courseNum
  }
}

//! note : private hanya bisa digunakan dalam 1 class tidak bisa digunakan untuk class lainnya
class SubUser extends User {
  isFamily: boolean = true
  changeCourseCount() {
    // this._courseCount = 4 // error becouse _courseCount using private
    this._courseCount = 4 // not error becouse _courseCount using protected
  }
}

// acces any propery of the student class
const rahman = new User("rahman@gmail.com", "rahman")
// rahman.city = "sumatera barat" // error
// rahman.name
// rahman.deleteToken() // error

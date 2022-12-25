// class typescript
export class User {
  email: string
  name: string
  readonly city: string = "Jakarta"
  constructor(email: string, name: string) {
    this.email = email
    this.name = name
  }
}

const rahman = new User("rahman@gmail.com", "rahman")
rahman.city = "sumatera barat" // error

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
  return val
}

function identityTwo(val: any): any {
  return val
}

function identityThree<Type>(val: Type): Type {
  return val
}

// identityThree(true)

// using short type ( T )
function identityFour<T>(val: T): T {
  return val
}
// identityFour(3)

// example :
interface Bootle {
  brand: string
  type: number
}

// identityFour<Bootle>({})

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3
  return products[myIndex]
}

// generic arrow function
// const getMoreSearchProducts = <T,>(products: T[]): T => {
const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4
  return products[myIndex]
}

// using Type parameters in generic constraints
interface Database {
  connection: string
  username: string
  password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return { valOne, valTwo }
}
// anotherFunction(3, {})

// Using Class types in Generic
interface Quiz {
  name: string
  type: string
}
interface Course {
  name: string
  author: string
  subject: string
}

class Sellable<T> {
  public cart: T[] = []
  addToCart(product: T) {
    this.cart.push(product)
  }
}

export {}

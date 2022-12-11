// start
interface User {
  readonly dbId: number
  email: string
  userId: number
  googleId?: string
  // startTrail: () => string
  startTrail(): string
  getCoupon(couponName: string, value: number): number
}
interface User {
  githubToken: string
}

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const rahman: Admin = {
  dbId: 22,
  email: "r@r.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail() {
    return "trail started"
    // return 2 // error
  },
  getCoupon: (name: "rahman", off: 10) => {
    return 10
  },
}
rahman.email = "juancok@gmail.com"
// rahman.dbId = 33 // error
// end
export {}

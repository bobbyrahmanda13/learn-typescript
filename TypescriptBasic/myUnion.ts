let score: number | string = 33

score = 44
score = "55"

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

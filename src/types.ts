export interface User {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  dob: {
    date: string
    age: number
  }
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
}

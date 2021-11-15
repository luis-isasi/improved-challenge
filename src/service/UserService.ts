import { fetcher } from '@Utils'
import { User } from '@Types'

interface ResponseUser {
  results: User[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}

const getRamdomUser = async () => {
  return fetcher<ResponseUser>({
    endpoint: 'https://randomuser.me/api/',
  })
}

const userService = {
  getRamdomUser,
}

export default userService

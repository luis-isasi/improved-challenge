import { useQuery } from 'react-query'

import { userService } from '@Service'

const App = () => {
  const { data, isLoading, error } = useQuery('user', () =>
    userService.getRamdomUser()
  )

  console.log({ data })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error</div>

  const { results } = data

  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center">
      <div className="px-4 md:px-0 flex flex-col items-center text-white">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
          Ramdom User 😀
        </h1>
        <p className="text-base  lg:text-xl">
          <b>Name:</b> {results[0].name.first} <br />
          <b>Last Name:</b> {results[0].name.last} <br />
          <b>Email:</b> {results[0].email} <br />
          <b>Number:</b> {results[0].phone} <br />
        </p>
      </div>
    </div>
  )
}

export default App

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
    <div className="">
      <p>
        Name: {results[0].name.first} <br />
        Last Name: {results[0].name.last} <br />
        Email: {results[0].email} <br />
        Number: {results[0].phone} <br />
      </p>
    </div>
  )
}

export default App

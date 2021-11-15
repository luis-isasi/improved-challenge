import { useQuery } from 'react-query'

import PHUserData from '@Components/Placeholders/PHUserData'
import Container from '@Components/Container'
import UserCard from '@Components/UserCard'
import { userService } from '@Service'

const App = () => {
  const { data, isLoading, error } = useQuery('user', () =>
    userService.getRamdomUser()
  )

  const renderUserData = () => {
    const {
      name,
      email,
      phone,
      picture,
      gender,
      dob: { age },
    } = data.results[0]

    return (
      <UserCard
        srcImage={picture.medium}
        firstName={name.first}
        lastName={name.last}
        email={email}
        phone={phone}
        gender={gender}
        age={age}
      />
    )
  }

  if (error) return <div>Error</div>

  return (
    <Container>
      <div className="px-4 md:px-0 flex flex-col items-center text-white">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
          Ramdom User 😀
        </h1>
        {isLoading && <PHUserData />}
        {error && <div>Error</div>}
        {!isLoading && !error && data && renderUserData()}
      </div>
    </Container>
  )
}

export default App

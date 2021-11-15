import Image from 'next/image'
import { useQuery } from 'react-query'

import PHUserData from '@Components/Placeholders/PHUserData'
import Container from '@Components/Container'
import { userService } from '@Service'

const App = () => {
  const { data, isLoading, error } = useQuery('user', () =>
    userService.getRamdomUser()
  )

  // console.log({ data, isLoading, error })

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
      <div
        data-testid="user-data"
        className="flex border border-gray-300 rounded-md p-4 w-full"
      >
        <div className="mr-5">
          <Image
            loader={({ src }) => `${src}`}
            src={picture.medium}
            alt="user-photo"
            width={80}
            height={80}
            className="rounded-full overflow-hidden"
            unoptimized={false}
          />
        </div>
        <div className="text-base lg:text-xl">
          <h2 className="font-medium text-3xl mb-3">{`${name.first} ${name.last}`}</h2>
          <b>Email:</b> {email} <br />
          <b>Age:</b> {age} <br />
          <b>Gender:</b> {gender} <br />
          <b>Number:</b> {phone} <br />
        </div>
      </div>
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

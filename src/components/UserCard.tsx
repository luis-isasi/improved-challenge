import Image from 'next/image'

interface Props {
  srcImage: string
  firstName: string
  lastName: string
  email: string
  age: number
  gender: string
  phone: string
}

const UserCard: React.FC<Props> = ({
  srcImage,
  firstName,
  lastName,
  email,
  age,
  gender,
  phone,
}) => {
  return (
    <div
      data-testid="user-data"
      className="flex border border-gray-300 rounded-md p-4 w-full"
    >
      <div className="mr-5">
        <Image
          loader={({ src }) => `${src}`}
          src={srcImage}
          alt="user-photo"
          width={80}
          height={80}
          className="rounded-full overflow-hidden"
          unoptimized={false}
        />
      </div>
      <div className="text-base lg:text-xl">
        <h2 className="font-medium text-3xl mb-3">{`${firstName} ${lastName}`}</h2>
        <b>Email:</b> {email} <br />
        <b>Age:</b> {age} <br />
        <b>Gender:</b> {gender} <br />
        <b>Number:</b> {phone} <br />
      </div>
    </div>
  )
}

export default UserCard

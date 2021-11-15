import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { render, screen } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'

import App from '@Views/App'

import { queryClient } from '@/src/pages/_app'
import { userMockData } from './userData'

// 2. Define request handlers and response resolvers.
const server = setupServer(
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    return res(
      // ctx.delay(),
      // ctx.status(200, 'Mocked status'),
      ctx.json(userMockData)
    )
  })
)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders random user', async () => {
  // Execute
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )

  expect(screen.getByTestId('user-loading')).toBeInTheDocument()

  const userDataEl = await screen.findByTestId('user-data')

  expect(userDataEl).toBeInTheDocument()
})

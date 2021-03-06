const PHUserData = () => {
  return (
    <div
      data-testid="user-loading"
      className="border border-gray-300 shadow rounded-md p-4 w-full mx-auto"
    >
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-17 w-17"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PHUserData

import UserResults from "../users/UserResults"
import UserSearch from "../users/UserSearch"

function Home() {
  return (
    <div className="mb-6">
      <UserSearch/>
      <UserResults/>
    </div>
  )
}

export default Home

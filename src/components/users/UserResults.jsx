import { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext";

function UserResults() {
  const {users, loading, fetchUsers} = useContext(GithubContext)

  console.log(loading)
  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);
  if (!loading) {
    return (
      <div className="grid grid-cols-1">
        {/* {users.map((user) => (
        <h2>{user.login}</h2>
      ))} */}
        <UserItem user={users} />
      </div>
    );
  } else {
   return <Spinner />;
  }
}

export default UserResults;

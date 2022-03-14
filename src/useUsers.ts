import { useState, useEffect } from "react";
import { IUser } from "./components/Router/Router";

const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [errorUsers, setError] = useState(null);
  const [isLoadedUsers, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  return {users, errorUsers, isLoadedUsers};
};

export default useUsers;
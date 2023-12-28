import { H1 } from "@/components/ui/typography";
import { useQuery } from "@tanstack/react-query";
//import { useEffect, useState } from "react";
import {User} from '@common/hms-lib';
import DisplayUsers from "./DisplayUsers";

type Props = {
  title?: string
}

const Users: React.FC<Props> = () => {

  //use below if using useEffect. Not efficient enough.
  /*const [users, setUsers] = useState<any>();
  const fetchUsers = () => {
    fetch("/users")
      .then((response) => response.json()
        .then((data) => {
          setUsers(data)
        })
      )
  }
  useEffect(() => {
    fetchUsers()
  }, [])*/

  //let's follow the react query approach
  const fetchUsers = async () => {
    const res = await fetch("/users");
    return await res.json();
  }
  const { isPending, error, data } = useQuery({
    queryKey: ['remote-users'],
    queryFn: fetchUsers,
  })
  if (isPending) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  //const data = useMemo(() => serverData ?? [], [serverData]);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
          <H1>Users</H1>
          <DisplayUsers data={data.users as User[]}/>
      </section>
    </>
  )
}

export default Users;
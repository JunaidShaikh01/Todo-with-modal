import AddUsers from "./Components/Users/AddUsers";
import "./styles.css";
import { useState } from "react";
import UserList from "./Components/Users/UserList";
export default function App() {
  const [userList, setUserList] = useState([]);
  function addUserHandler(uName, uAge) {
    setUserList((preuserList) => {
      return [
        ...preuserList,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString()
        }
      ];
    });
  }
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

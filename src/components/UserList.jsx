import { useState, useEffect } from "react";
import { users } from "../axios";

function UserList() {
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    users("/").then((response) => setUserList(response.data));
  }, []);

  const filtUser = userList.filter((user) => user.name.includes(search));
  const wer = " ________ email: ";

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 border rounded-lg shadow-md bg-white">
      <h1 className="text-3xl font-bold text-center mb-5">User List</h1>
      <input
        type="text"
        placeholder="Qidirish"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full py-2 px-4 mb-6 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      />
      <ul className="space-y-4">
        {filtUser.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-gray-100 border rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-200"
          >
            <span className="text-lg font-medium text-gray-800">{user.name}</span>
            <span className="text-gray-600">{wer} {user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
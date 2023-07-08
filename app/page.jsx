"use client";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Create } from "./component/Create";
import { Update } from "./component/Update";

export default function Home() {
  // defining my state and variables
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUser] = useState([]);
  const [createUser, setCreateUser] = useState(false);
  const [ updateUser, setUpdateUser] = useState(false);
  // const [userId, setUserId] = useState(null);

  // fetching from the API

  useEffect(() => {
    const getData = async () => {
      const { data: res } = await axios.get(url);
      setUser(res);
    };
    getData();
  }, []);

  return (
    <Fragment>
      <div className="w-full  text-blue-100 h-full rounded-md flex flex-col">
        <button
          onClick={() => setCreateUser(true)}
          className="bg-purple-600 rounded-md text-white p-2 m-1 "
        >
          create
        </button>
        <table className="table-auto border-separate border border-slate-500  bg-blue-950 rounded-md">
          <thead >
            <tr>
              <th className="border border-slate-600 ">name</th>
              <th className="border border-slate-600 ">username</th>
              <th className="border border-slate-600 ">email</th>
              <th className="border border-slate-600 ">address</th>
              <th className="border border-slate-600 ">phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-slate-600 ">{user.name}</td>
                <td className="border border-slate-600 ">{user.username}</td>
                <td className="border border-slate-600 ">{user.email}</td>
                <td className="border border-slate-600 ">
                  {user.address.city}
                </td>
                <td className="border border-slate-600 ">{user.phone}</td>
                <td>
                  <button
                    onClick={() => setUpdateUser(true)}
                    setUserId
                    className="bg-purple-600 rounded-md text-white p-2 m-1"
                  >
                    update
                  </button>
                </td>
                <td>
                  <button className="bg-purple-600 rounded-md text-white p-2 m-1">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Create isVisible={createUser} onClose={() => setCreateUser(false)} />
      <Update isVisible={updateUser} onClose={() => setUpdateUser(false)} />
    </Fragment>
  );
}

import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Fredy",
      image:
        "https://media.gettyimages.com/photos/smiling-teenage-boy-with-school-bag-in-front-of-school-picture-id1175573811?s=170667a",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;

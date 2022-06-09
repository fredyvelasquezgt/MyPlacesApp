import React from "react";
import UsersItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "./UsersList.css";

export const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>no users found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="user-list">
      {props.items.map((user) => {
        return (
          <UsersItem
            key={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;

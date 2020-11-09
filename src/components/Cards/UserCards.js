import React from "react";
import UserCard from "./Card/UserCard";
import "./UserCards.css";

const UserCards = () => {
  let data = [
    {
      id: 1,
      mailid: "a@b.com",
      firstname: "user1first",
      lastname: "user1last",
    },
    {
      id: 2,
      mailid: "a@asd222.com",
      firstname: "user2first",
      lastname: "user2last",
    },
    {
      id: 3,
      mailid: "a@asd333.com",
      firstname: "user3first",
      lastname: "user3last",
    },
    {
      id: 4,
      mailid: "a@asd444.com",
      firstname: "user4first",
      lastname: "user4last",
    },
    {
      id: 5,
      mailid: "a@asd555.com",
      firstname: "user5first",
      lastname: "user5last",
    },
  ];

  return (
    <div className="usercards">
      <div className="usercards__card">
        {data.length > 0 ? (
          <React.Fragment>
            <UserCard key="1" />
            <UserCard key="2" />
            <UserCard key="3" />
            <UserCard key="4" />
            <UserCard key="5" />
            <UserCard key="6" />
            <UserCard key="7" />
            <UserCard key="8" />
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default UserCards;

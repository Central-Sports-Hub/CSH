import React from "react";
import Link from "next/link";

//handle GET request from /api/users
app.get("api/users", (req, res) => {
  const users = [{ id: 1, username: "JohnnyBoy" }];
  res.json(users);
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

const UsersPage = () => {
  return <div>Userspage</div>;
};

export default "Userspage";

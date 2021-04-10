import bycrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bycrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "Fahim Arif",
    email: "fahim@gmail.com",
    password: bycrypt.hashSync("1234", 10),
  },
  {
    name: "Rahman",
    email: "rahman@example.com",
    password: bycrypt.hashSync("1234", 10),
  },
];

export default users;

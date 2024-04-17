const users = [];
const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const extists = users.find(
    (user) => user.room === room && user.name === name
  );
  if (extists) {
    return { error: "user is already exist" };
  }

  const user = { id, name, room };
  users.push(user);
  console.log("user.js : ", users);
  return { user };
};
const removeUser = (id) => {
  const idx = users.indexOf((user) => user.id === id);
  if (idx !== -1) {
    return users.splice(idx, 1)[0];
  }
};
const getusers = (id) => users.find((user) => user.id === id);

const getusersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getusers, getusersInRoom };

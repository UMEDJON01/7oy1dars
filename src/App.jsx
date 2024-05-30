import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/UserList";
import NewUserForm from "./components/newuser/NewUserFrom";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserForm addUser={addUser} />}
      <button className="create-user" onClick={() => setShowModal(true)}>
        Create User
      </button>

      <Footer />
    </div>
  );
}

export default App;

// {
//   id: 1,
//   image: "https://picsum.photos/400?random=1",
//   firstName: "Akhror",
//   lastName: "Soliyev",
//   age: 20,
//   from: "Uzbekistan",
//   job: "Frontend Developer",
//   gender: "Male",
// },

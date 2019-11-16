import React, {useState} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import User from "./User";
import UsersListItem from "./UsersListItem";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";


const initialUserState :User = { id: 0, name: '', surname: '' , city:''}

const App : React.FC = () => {
    const usersData : User[] = [
        { id: 1, name: 'Andrea', surname: 'Rossi' , city:'Rome' },
        { id: 2, name: 'Gianni', surname: 'Bianchi' , city:'Venice' },
        { id: 3, name: 'Francesco', surname: 'Versi' , city:'Milan'},
    ]

    const [users, setUsers] = useState<User[]>(usersData)
    const [editing, setEditing] = useState(false)
    const [currentUser, setCurrentUser] = useState<User>(initialUserState)

    const addUser = (user:User) => {
        user.id = users.length + 1
        setUsers([...users, user])
        console.log("AddUser");
    }

    const deleteUser = ( id :number )=> {
        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id:number, updatedUser:User) => {
        setEditing(false)

        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = (user : User) => {
        setEditing(true)

        setCurrentUser({ id: user.id, name: user.name, surname: user.surname, city:user.city })
    }



    return (<Container>
          <h1>CRUD App with Hooks</h1>
          <div className="flex-row">
              <div className="flex-large">
                  {editing ? (
                      <div>
                          <h2>Edit user</h2>
                          <EditUserForm
                              editing={editing}
                              setEditing={setEditing}
                              currentUser={currentUser}
                              updateUser={updateUser}
                          />
                      </div>
                  ) : (
                      <div>
                          <h2>Add user</h2>
                          <AddUserForm addUser={addUser} />
                      </div>
                  )}
              </div>

            <div className="flex-large">
              <h2>View users</h2>
              <UsersListItem users={users} editRow={editRow} deleteUser={deleteUser}  />
            </div>
        </div>
    </Container>)
  }

export default App;

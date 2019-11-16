import React, {useState} from "react";
import User from "./User";

const initialUserState : User= { id: 0, name: '', surname: '', city:''}

interface AddUserProps {
    addUser(user:User): void
}

const AddUserForm = (props:AddUserProps) => {
    const [user, setUser] = useState<User>(initialUserState)

    const handleInputChange = (event:any) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    const HandleAddClick = (event:any) => {

        event.preventDefault()
        if (user ===initialUserState) return

        props.addUser(user)
        setUser(initialUserState)
    }

    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" value={user.name}  onChange={handleInputChange}  />
            <label>Surname</label>
            <input type="text" name="surname" value={user.surname}  onChange={handleInputChange}  />
            <label>City</label>
            <input type="text" name="city" value={user.city}  onChange={handleInputChange}  />
            <button onClick={HandleAddClick}>Add new user</button>
        </form>
    )
}

export default AddUserForm;

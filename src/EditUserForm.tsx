import React, {useEffect, useState} from 'react'
import User from "./User";

const EditUserForm = (props : any) => {
    const [user , setUser] = useState<User>(props.currentUser)

    const handleInputChange = (event:any) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    const handleUpdate =  (event:any) =>{
        event.preventDefault()

        props.updateUser(user.id, user)
    }

    const handleCancel =  (event:any) =>{
        event.preventDefault()

        props.setEditing(false)
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (<form>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Surname</label>
            <input type="text" name="surname" value={user.surname} onChange={handleInputChange} />
            <label>City</label>
            <input type="text" name="city" value={user.city} onChange={handleInputChange} />
            <button onClick={handleUpdate}>Update user</button>
            <button onClick={handleCancel} className="button muted-button">Cancel</button>
        </form>)
}

export default EditUserForm

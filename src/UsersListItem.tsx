import React from "react";
import User from "./User";


interface UsersListProps {
    deleteUser(id:number):void
    editRow(user:User) :void
    users : User[]
}

const UsersListItem = (props:UsersListProps) => {

    return (<table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>City</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.users.length > 0 ? (
                props.users.map( (user: User) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.city}</td>
                        <td>
                            <button onClick={() => {props.editRow(user)}} className="button muted-button">
                                Edit
                            </button>
                            <button onClick={() => props.deleteUser(user.id)} className="button muted-button">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
            </tbody>
        </table>)
}


export default UsersListItem;

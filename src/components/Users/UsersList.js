import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList = (props) => {
    const userList = props.users.map(user => {
        return <li key={Math.floor(Math.random() * 1000)}>{user.username} {user.age} (years old)</li>
    })
    return (
        <Card className={classes.users}>
            <ul>
                {userList}
            </ul>
        </Card>
    );
};
export default UsersList;
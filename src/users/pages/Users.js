import React from 'react';
import UsersList from '../components/UsersList';


const USERS=[
{
id:'u1', 
name:'Gurvinder', 
image:'https://medias.momentfactory.com/2016/08/montreal-375th-birthday-anniversary-jacques-cartier-light-show-bridge.jpg', 
place:2}
];

const Users=()=>{
    return <UsersList items={USERS}/>;
}

export default Users;
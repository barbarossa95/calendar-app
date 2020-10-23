import React from 'react';

export const User = ({user}) => {
    const name = !user? 'username' : user.name;

    return (
        <span>Hi, {name}!</span>
    );
}
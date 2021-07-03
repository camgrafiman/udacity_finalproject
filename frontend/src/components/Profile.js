import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        isAuthenticated && (
        <div className="profilePage">
            <img src={user.picture} alt={user.name} />
            <h2>Welcome, {user.name}</h2>
                <p>Email: {user.email}</p>
                <code>{ JSON.stringify(user, null, 2)}</code>
        </div>
        )
    )
}
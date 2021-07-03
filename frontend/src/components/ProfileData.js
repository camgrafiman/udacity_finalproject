import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const ProfileData = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        isAuthenticated && (
        <>
            <img src={user.picture} alt={user.name} className="profileImg"/>
            <h2 className="profileText">Welcome, {user.name}</h2>
            <p className="profileEmail">{user.email}</p>
        </>
        )
    )
}
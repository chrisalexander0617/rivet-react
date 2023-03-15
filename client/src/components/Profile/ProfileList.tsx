import React from 'react'
import {Box, Typography} from '@mui/material'
import { ProfileCard } from './ProfileCard'
import {ProfileListType} from '../../types/Profile/index'
import {Link} from 'react-router-dom'

export const ProfileList: React.FC<ProfileListType> = ({ profiles }) => {
    return (
        <>
        {profiles.map((profile, i) => (
            <Link to={`/profile/${profile.id.toString()}`}>
                <Box p={3}>
                    <div key={i}>
                        <h1>{profile.first_name}</h1>
                        <h1>{profile.last_name}</h1>
                    </div>
                </Box> 
            </Link>
        ))}
        </>
    )
}
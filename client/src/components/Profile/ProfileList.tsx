import React from 'react'
import { ProfileCard } from './ProfileCard'
import {ProfileListType} from '../../types/Profile/index'

export const ProfileList: React.FC<ProfileListType> = ({ profiles }) => {
    return (
        <>
        {profiles.map((profile,i) => (
            <div>{profile.first_name}</div>
        ))}
        </>
    )
}
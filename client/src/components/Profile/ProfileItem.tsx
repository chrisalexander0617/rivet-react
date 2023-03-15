import React from 'react'
import {Box,Typography} from '@mui/material'
import {ProfileType} from '../../types/Profile'

export const ProfileItem = (props:ProfileType) => {
    return (
        <>
            <Box>
                <Typography>{props.first_name}</Typography>
                <Typography>{props.last_name}</Typography>
            </Box>
        </>
    )
}
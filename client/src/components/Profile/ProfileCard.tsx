import React from 'react'
import {Box,Typography} from '@mui/material'

interface ProfileCardProps {
    first_name:string & { __charLimit: 255 }
    last_name:string & { __charLimit: 255 }
    phone:string & { __charLimit: 255 }
    email:string & { __charLimit: 255 }
    address:string
    city:string
    state:string
    zip: string & { __charLimit: 255 }
    photo: string & { __charLimit: 255 }
    notes:string & {__charlimit:255}
}

export const ProfileCard = (props:ProfileCardProps) => {
    return (
        <>
            <Box>
                <Typography>{props.first_name}</Typography>
                <Typography>{props.last_name}</Typography>
                <Typography>{props.phone}</Typography>
                <Typography>{props.email}</Typography>
                <Typography>{props.address}</Typography>
                <Typography>{props.city}</Typography>
                <Typography>{props.state}</Typography>
                <Typography>{props.zip}</Typography>
                <Typography>{props.photo}</Typography>
                <Typography>{props.notes}</Typography>
            </Box>
        </>
    )
}
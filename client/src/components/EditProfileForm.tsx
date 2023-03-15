import React, {useState} from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'
import { ProfileType } from '../types/Profile'

export const EditProfileForm: React.FC<ProfileType> = ({ 
     id,
     first_name,
     last_name,
     phone,
     email,
     address,
     city,
     state,
     zip,
     photo,
     notes
}) => {

    const [firstName, setFirstName] = useState<string>(first_name)
    const [lastName, setLastName] = useState<string>(last_name)

    const styles = {
        display:'flex',
        flexDirection:'column',
        width:'400px',
        margin:'0 auto',
        gap:1
    }

    return (
        <>
            <Box sx={styles}>
                <TextField onChange={e => setFirstName(e.target.value)} label="first name" value={firstName}/>
                <TextField onChange={e => setLastName(e.target.value)}  label="last name" value={lastName}/>
                <TextField onChange={e => setFirstName(e.target.value)} label="phone" value={phone} />
                <TextField onChange={e => setFirstName(e.target.value)} label="email" value={email}/>
                <TextField onChange={e => setFirstName(e.target.value)} label="address" value={address}/>
                <TextField onChange={e => setFirstName(e.target.value)} label="city" value={city}/>
                <TextField onChange={e => setFirstName(e.target.value)} label="city" value={state}/>
                <TextField onChange={e => setFirstName(e.target.value)} label="city" value={zip}/>
                <TextField onChange={e => setFirstName(e.target.value)} label="city" value={photo}/>
                <TextField onChange={e => setFirstName(e.target.value)} label="notes" value={notes}/>
                <Button>Update</Button>
            </Box>
        </>
    )
}
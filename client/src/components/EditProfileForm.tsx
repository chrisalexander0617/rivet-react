import React, {useState} from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'

export const EditProfileForm = () => {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    
    return (
        <>
            <Box>
                <TextField onChange={e => setFirstName(e.target.value)} label="first name" value={firstName}/>
                <TextField onChange={e => setLastName(e.target.value)} label="last name" value={firstName}/>
                <TextField onChange={e => setFirstName(e.target.value)}  />
                <TextField onChange={e => setFirstName(e.target.value)} />
                <TextField onChange={e => setFirstName(e.target.value)} />
                <TextField onChange={e => setFirstName(e.target.value)} />
                <Button>Update</Button>
            </Box>
        </>
    )
}
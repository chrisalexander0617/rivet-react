import React, {useState} from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'

export const EditProfileForm = (id:any) => {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")

    const styles = {
        display:'flex',
        flexDirection:'column',
        width:'400px',
        margin:'0 auto',
        gap:1
    }

    console.log('profile in in the edit form', id)

    
    return (
        <>
            <Box sx={styles}>
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
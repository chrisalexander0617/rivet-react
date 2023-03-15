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

    const [firstName, setFirstNameValue] = useState<string>(first_name)
    const [lastName, setLastNameValue] = useState<string>(last_name)
    const [phoneValue, setPhoneValue] = useState<string>(phone)
    const [emailValue, setEmailValue] = useState<string>(email)
    const [addressValue, setAddressValue] = useState<string>(address)
    const [cityValue, setCityValue] = useState<string>(city)
    const [stateValue, setStateValue] = useState<string>(state)
    const [zipValue, setZipValue] = useState<string>(zip)
    const [photoValue, setPhotoValue] = useState<string>(photo)
    const [notesValue, setNotesValue] = useState<string>(notes)

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
                <TextField onChange={e => setFirstNameValue(e.target.value)} label="first name" value={firstName}/>
                <TextField onChange={e => setLastNameValue(e.target.value)}  label="last name" value={lastName}/>
                <TextField onChange={e => setPhoneValue(e.target.value)} label="phone" value={phone} />
                <TextField onChange={e => setEmailValue(e.target.value)} label="email" value={email}/>
                <TextField onChange={e => setAddressValue(e.target.value)} label="address" value={address}/>
                <TextField onChange={e => setCityValue(e.target.value)} label="city" value={city}/>
                <TextField onChange={e => setStateValue(e.target.value)} label="city" value={state}/>
                <TextField onChange={e => setZipValue(e.target.value)} label="city" value={zip}/>
                <TextField onChange={e => setPhotoValue(e.target.value)} label="city" value={photo}/>
                <TextField onChange={e => setNotesValue(e.target.value)} label="notes" value={notes}/>
                <Button>Update</Button>
            </Box>
        </>
    )
}
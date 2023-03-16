import React, {useState} from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'
import { NewProfileType } from '../types/Profile'
import { ProfileAPI } from '../api/services/Profiles'

export const AddNewProfileForm = () => {
  const [firstNameValue, setFirstNameValue] = useState<string>("")
  const [lastNameValue, setLastNameValue] = useState<string>("")
  const [phoneValue, setPhoneValue] = useState<string>("")
  const [emailValue, setEmailValue] = useState<string>("")
  const [addressValue, setAddressValue] = useState<string>("")
  const [cityValue, setCityValue] = useState<string>("")
  const [stateValue, setStateValue] = useState<string>("")
  const [zipValue, setZipValue] = useState<string>("")
  const [photoValue, setPhotoValue] = useState<string>("")
  const [notesValue, setNotesValue] = useState<string>("")

  const newProfile:NewProfileType = {
    first_name:firstNameValue,
    last_name:lastNameValue,
    phone:phoneValue,
    email:emailValue,
    address:addressValue,
    city:cityValue,
    state:stateValue,
    zip:zipValue,
    photo:photoValue,
    notes:notesValue
  }

  const handleAddNewProfile = async () => {
    console.log('new Profile', newProfile)
        try {
            const result = await ProfileAPI.createNewProfile(newProfile)
            console.log('result', result)
        }   catch(err){
            console.log(err, 'Something went wrong as hell')
        }
    }

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
                <TextField onChange={e => setFirstNameValue(e.target.value)} label="first name" value={firstNameValue}/>
                <TextField onChange={e => setLastNameValue(e.target.value)}  label="last name" value={lastNameValue}/>
                <TextField onChange={e => setPhoneValue(e.target.value)} label="phone" value={phoneValue} />
                <TextField onChange={e => setEmailValue(e.target.value)} label="email" value={emailValue}/>
                <TextField onChange={e => setAddressValue(e.target.value)} label="address" value={addressValue}/>
                <TextField onChange={e => setCityValue(e.target.value)} label="city" value={cityValue}/>
                <TextField onChange={e => setStateValue(e.target.value)} label="state" value={stateValue}/>
                <TextField onChange={e => setZipValue(e.target.value)} label="zip" value={zipValue}/>
                <TextField onChange={e => setPhotoValue(e.target.value)} label="photo" value={photoValue}/>
                <TextField onChange={e => setNotesValue(e.target.value)} label="notes" value={notesValue}/>
                <Button onClick={handleAddNewProfile}>Update</Button>
            </Box>
        </>
    )
}
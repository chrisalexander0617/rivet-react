import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { ProfileType, EditProfileFormActions } from '../types/Profile'
import { ProfileAPI } from '../api/services/Profiles'


export const EditProfileForm: React.FC<ProfileType & EditProfileFormActions> = ({
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
  notes,
  handleCloseModal
}) => {
  const [firstNameValue, setFirstNameValue] = useState<string>(first_name)
  const [lastNameValue, setLastNameValue] = useState<string>(last_name)
  const [phoneValue, setPhoneValue] = useState<string>(phone)
  const [emailValue, setEmailValue] = useState<string>(email)
  const [addressValue, setAddressValue] = useState<string>(address)
  const [cityValue, setCityValue] = useState<string>(city)
  const [stateValue, setStateValue] = useState<string>(state)
  const [zipValue, setZipValue] = useState<string>(zip)
  const [photoValue, setPhotoValue] = useState<string>(photo)
  const [notesValue, setNotesValue] = useState<string>(notes)

  const updatedProfile: ProfileType = {
    id: id,
    first_name: firstNameValue,
    last_name: lastNameValue,
    phone: phoneValue,
    email: emailValue,
    address: addressValue,
    city: cityValue,
    state: stateValue,
    zip: zipValue,
    photo: photoValue,
    notes: notesValue
  }

  const handleUpdateProfile = async () => {
    try {
      await ProfileAPI.updateProfile(id, updatedProfile)
      window.location.reload()

    } catch (err) {
      throw new Error(`${err}`)
    }
  }

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fafafa',
    p: 4,
    boxShadow: 4,
    zIndex: 20
  };

  return (
    <>
      <Box sx={styles}>
        <TextField onChange={e => setFirstNameValue(e.target.value)} label="first name" value={firstNameValue} />
        <TextField onChange={e => setLastNameValue(e.target.value)} label="last name" value={lastNameValue} />
        <TextField onChange={e => setPhoneValue(e.target.value)} label="phone" value={phoneValue} />
        <TextField onChange={e => setEmailValue(e.target.value)} label="email" value={emailValue} />
        <TextField onChange={e => setAddressValue(e.target.value)} label="address" value={addressValue} />
        <TextField onChange={e => setCityValue(e.target.value)} label="city" value={cityValue} />
        <TextField onChange={e => setStateValue(e.target.value)} label="state" value={stateValue} />
        <TextField onChange={e => setZipValue(e.target.value)} label="zip" value={zipValue} />
        <TextField onChange={e => setPhotoValue(e.target.value)} label="photo" value={photoValue} />
        <TextField onChange={e => setNotesValue(e.target.value)} label="notes" value={notesValue} />
        <Button onClick={handleUpdateProfile}>Update</Button>
        <Button onClick={handleCloseModal}>Close</Button>
      </Box>
    </>
  )
}
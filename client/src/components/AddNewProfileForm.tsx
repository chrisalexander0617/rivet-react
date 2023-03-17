import {useState} from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'
import { ProfileType, NewProfileType, FieldDataType } from '../types/Profile'
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

 
    const fieldData: FieldDataType[] = [
        {
            label:'first name',
            value:firstNameValue,
            maxLength:255,
            required:true,
            handleStateChange:(e:React.ChangeEvent<HTMLInputElement>): void => {
                setFirstNameValue(e.currentTarget.value)
            }
        },
        {
            label:'last name',
            value:lastNameValue,
            maxLength:255,
            required:true,
            handleStateChange:(e: React.ChangeEvent<HTMLInputElement>): void => {
                setLastNameValue(e.currentTarget.value)
            }
        },
        {
            label:'phone',
            value:phoneValue,
            maxLength:255,
            required:true,
            handleStateChange:(e: React.ChangeEvent<HTMLInputElement>): void => {
                setPhoneValue(e.currentTarget.value)
            }
        },
        {
            label:'email',
            value:emailValue,
            maxLength:255,
            required:true,
            handleStateChange:(e: React.ChangeEvent<HTMLInputElement>): void => {
                setEmailValue(e.currentTarget.value)
            }
        },
        {
            label:'address',
            value:addressValue,
            maxLength:255,
            required:true,
            handleStateChange:(e: React.ChangeEvent<HTMLInputElement>): void => {
                setAddressValue(e.currentTarget.value)
            }
        },
        {
            label:'city',
            value:cityValue,
            maxLength:255,
            required:true,
            handleStateChange:(e: React.ChangeEvent<HTMLInputElement>): void => {
                setCityValue(e.currentTarget.value)
            }
        },
        {
            label:'state',
            value:stateValue,
            maxLength:255,
            required:true,
            handleStateChange:(e: React.ChangeEvent<HTMLInputElement>): void => {
                setStateValue(e.currentTarget.value)
            }
        },
        {
            label:'zip',
            value:zipValue,
            maxLength:255,
            required:true,
            handleStateChange:(e: React.ChangeEvent<HTMLInputElement>): void => {
                setZipValue(e.currentTarget.value)
            }
        },
        {
            label:'photo',
            value:photoValue,
            maxLength:255,
            required:true,
            handleStateChange:(e: React.ChangeEvent<HTMLInputElement>): void => {
                setPhotoValue(e.currentTarget.value)
            }
        },
        {
            label:'notes',
            value:notesValue,
            maxLength:255,
            required:true,
            handleStateChange:(e: React.ChangeEvent<HTMLInputElement>): void => {
                setNotesValue(e.currentTarget.value)
            }
        },
        
    ]

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
                {fieldData.map((item, i) => (
                    <TextField 
                        label={item.label}
                        onChange={item.handleStateChange}
                        value={item.value}
                        inputProps={{maxLength:item.maxLength}}
                    />
                ))}
                {/* <TextField 
                    onChange={e => setFirstNameValue(e.target.value)} 
                    label="first name" 
                    value={firstNameValue}
                    inputProps={{ maxLength: 255 }}
                />
                <TextField 
                    onChange={e => setLastNameValue(e.target.value)}  
                    label="last name" 
                    value={lastNameValue}
                    inputProps={{ maxLength: 255 }}
                />
                <TextField 
                    onChange={e => setPhoneValue(e.target.value)} 
                    label="phone" 
                    value={phoneValue} 
                    inputProps={{ maxLength: 255 }}
                />
                <TextField 
                    onChange={e => setEmailValue(e.target.value)} 
                    label="email" 
                    value={emailValue}
                    inputProps={{ maxLength: 255 }}
                />
                <TextField 
                    onChange={e => setAddressValue(e.target.value)} 
                    label="address" 
                    value={addressValue}
                    inputProps={{ maxLength: 255 }}
                />
                <TextField 
                    onChange={e => setCityValue(e.target.value)} 
                    label="city" 
                    value={cityValue}
                    inputProps={{ maxLength: 255 }}
                />
                <TextField 
                    onChange={e => setStateValue(e.target.value)} 
                    label="state" 
                    value={stateValue}
                    inputProps={{ maxLength: 255 }}
                />
                <TextField 
                    onChange={e => setZipValue(e.target.value)} 
                    label="zip" 
                    value={zipValue}
                    inputProps={{ maxLength: 255 }}
                />
                <TextField 
                    onChange={e => setPhotoValue(e.target.value)} 
                    label="photo" 
                    value={photoValue}
                    inputProps={{ maxLength: 255 }}
                />
                <TextField 
                    onChange={e => setNotesValue(e.target.value)} 
                    label="notes" 
                    value={notesValue}
                    inputProps={{ maxLength: 255 }}
                /> */}
                <Button onClick={handleAddNewProfile}>Update</Button>
            </Box>
        </>
    )
}
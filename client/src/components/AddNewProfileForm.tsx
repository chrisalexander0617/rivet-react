import { useState } from 'react'
import {
	Box, 
	Button, 
	FormControl, 
	InputLabel, 
	Input, 
	Grid, 
	Typography 
} from '@mui/material'
import { NewProfileType, FieldDataType } from '../types/Profile'
import { ProfileAPI } from '../api/services/Profiles'

interface AddNewProfileFormProps {
	handleCloseModal:() => void
}

export const AddNewProfileForm = (props:AddNewProfileFormProps) => {
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
	const [errors, setErrors] = useState<string[]>()

	const newProfile:NewProfileType = {
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

	const isFormFilledOut = ():boolean => {
		if(firstNameValue.length < 3 ||
				lastNameValue.length < 3 ||
				phoneValue.length < 10 ||
				emailValue.length < 7 ||
				addressValue.length < 5 ||
				cityValue.length < 3 ||
				stateValue.length < 2 ||
				zipValue.length < 5
			) return true

			else return false
	}

	const handleAddNewProfile = async () => {
		setErrors([])

		try {
			const result = await ProfileAPI.createNewProfile(newProfile)

			if (result.errors){
				let errorsStringArray:string[] = []

				result.errors.forEach((item:any) => {
					const errorString = `${item.msg}:${item.param}`
					errorsStringArray.push(errorString)
				})

				setErrors(errorsStringArray)
			}

		} catch (err) {
			console.log('Something went wrong', err)
		 }
	}

	const fieldData: FieldDataType[] = [
		{
			label: 'first name',
			value: firstNameValue,
			maxLength: 255,
			required: true,
			handleStateChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
				setFirstNameValue(e.currentTarget.value)
			}
		},
		{
			label: 'last name',
			value: lastNameValue,
			maxLength: 255,
			required: true,
			handleStateChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
				setLastNameValue(e.currentTarget.value)
			}
		},
		{
			label: 'phone',
			value: phoneValue,
			maxLength: 255,
			required: true,
			handleStateChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
				setPhoneValue(e.currentTarget.value)
			}
		},
		{
			label: 'email',
			value: emailValue,
			maxLength: 255,
			required: true,
			handleStateChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
				setEmailValue(e.currentTarget.value)
			}
		},
		{
			label: 'address',
			value: addressValue,
			maxLength: 255,
			required: true,
			handleStateChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
				setAddressValue(e.currentTarget.value)
			}
		},
		{
			label: 'city',
			value: cityValue,
			maxLength: 255,
			required: true,
			handleStateChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
				setCityValue(e.currentTarget.value)
			}
		},
		{
			label: 'state',
			value: stateValue,
			maxLength: 255,
			required: true,
			handleStateChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
				setStateValue(e.currentTarget.value)
			}
		},
		{
			label: 'zip',
			value: zipValue,
			maxLength: 255,
			required: true,
			handleStateChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
				setZipValue(e.currentTarget.value)
			}
		},
		{
			label: 'photo',
			value: photoValue,
			maxLength: 255,
			required: true,
			handleStateChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
				setPhotoValue(e.currentTarget.value)
			}
		},
		{
			label: 'notes',
			value: notesValue,
			maxLength: 255,
			required: true,
			handleStateChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
				setNotesValue(e.currentTarget.value)
			}
		},
	]

	const styles = {
    display:'flex',
    flexDirection:'column',
    gap:3,
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: '#fafafa',
		p: 4,
    boxShadow:4,
		zIndex:20
	};

	return (
		<>
			<Box sx={styles}>
				<Box>
					<Typography variant="h5" textAlign="center">Add New Profile</Typography>
				</Box>
				<Box>
					{errors && errors?.map((error, i) => (
						<Typography color="red">{error}</Typography>
					))}
				</Box>
				<Grid container spacing={3}>
					{fieldData.map((item, i) => (
						<Grid item xs={6}>
							<FormControl>
								<InputLabel htmlFor="my-input">{item.label}</InputLabel>
								<Input 
									inputProps={{ maxLength: item.maxLength }} 
									onChange={item.handleStateChange} 
									value={item.value} 
									id={`${item.label}-${i}`} 
									aria-describedby={`${item.label}-${i}`} 
									required 
								/>
							</FormControl>
						</Grid>
					))}
				</Grid>
				<Button variant="contained" disabled={isFormFilledOut()} onClick={handleAddNewProfile}>Save</Button>
				<Button onClick={props.handleCloseModal}>Close</Button>
			</Box>
		</>
	)
}

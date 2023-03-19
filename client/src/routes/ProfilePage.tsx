import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ProfileAPI } from '../api/services/Profiles';
import { Box, Container, Typography, Button } from '@mui/material'
import { EditProfileForm } from '../components/EditProfileForm';
import { isValidHttpUrl } from '../utils'

export const ProfilePage = () => {
  const mounted = useRef(false)
  const [profile, setProfile] = useState<any>()
  const [modalOpen, isModalOpen] = useState<boolean>(false)
  const routeParams = useParams();

  const getSingleProfile = async (id: string) => {
    const result = await ProfileAPI.getProfile(id)
    if(result) setProfile(result)
  }

  const styles = {
    ProfileWrapper: {
      textAlign: 'left'
    },
    FlexBox:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'left',
      gap: 2
    },
    ProfileImage:{
      height: 350,
      width: 350,
      borderRadius: '100%',
      maxHeight: { xs: 233, md: 233 },
      maxWidth: { xs: 233, md: 233 },
      objectFit: 'cover'
    }
  }

  useEffect(() => {
    mounted.current = true

    if (mounted.current) {
      if (routeParams?.id) {
          getSingleProfile(routeParams.id)
      } else { console.log('No profile') }
    }

    return () => { mounted.current = false }
  }, [routeParams.id])

  if (!profile) return <div>...loading</div>

  return (
    <Box className="App">
      <Container>
        <Box py={5} sx={styles.ProfileWrapper}>
        <Typography variant="body1" mb={1}>Profile</Typography>
        <Box sx={styles.FlexBox}>
          <Box
            component="img"
            sx={styles.ProfileImage}
            alt="The house from the offer."
            src={isValidHttpUrl(profile.photo) ? profile.photo : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
          />
            <Typography mr={1} variant="h3">{profile.first_name}</Typography>
            <Typography variant="h3">{profile.last_name}</Typography>
            <Typography variant="h5">Phone #:{profile.phone}</Typography>
            <Typography variant="h5">Email:{profile.email}</Typography>
            <Typography variant="h5">Address:{profile.address}</Typography>
            <Typography variant="h5">City:{profile.city}</Typography>
            <Typography variant="h5">State:{profile.state}</Typography>
            <Typography variant="h5">Notes:{profile.notes}</Typography>
          </Box>
          <Button onClick={() => isModalOpen(!modalOpen)} sx={{ my: 3, mr: 2 }} variant="contained">Edit Profile</Button>
          <Button href="/" sx={{ my: 3 }} variant="outlined">Back Home</Button>
        </Box>
      </Container>
    {modalOpen && (
    <EditProfileForm
      id={profile.id}
      first_name={profile.first_name}
      last_name={profile.last_name}
      phone={profile.phone}
      email={profile.email}
      address={profile.address}
      city={profile.city}
      state={profile.state}
      zip={profile.zip}
      photo={profile.photo}
      notes={profile.notes}
    />)}
    </Box>
  );
}
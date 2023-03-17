import {useEffect, useState, useRef} from 'react'
import {useParams} from 'react-router-dom'
import { ProfileAPI } from '../api/services/Profiles';
import {Box, Container, Typography, Button} from '@mui/material'
import { EditProfileForm } from '../components/EditProfileForm';


export const ProfilePage = () => {
  const mounted = useRef(false)
  const [profile, setProfile] = useState<any>()
  const [modalOpen, isModalOpen] = useState<boolean>(false)
  const routeParams = useParams();

  const getSingleProfile = async (id:string) => {
    const result = await ProfileAPI.getProfile(id)
    setProfile(result)
  }

  const styles = {
    ProfileWrapper: {
      textAlign:'left'
    }
  }

  useEffect(() => {
    mounted.current = true
    
    if(mounted.current){
      if(routeParams?.id) { 
        getSingleProfile(routeParams.id)
      } else { console.log('No profile')}
    } 
    
    return () => { mounted.current = false }
  },[routeParams.id])

  if(!profile) return <div>...loading</div>

  return (
    <div className="App">
        <Container>
          <Box py={5} sx={styles.ProfileWrapper}>
          <Typography variant="body1" mb={1}>Profile</Typography>
            <Box sx={{
              display:'flex' , 
              flexDirection:'column',
              alignItems:'start',
              justifyContent:'left',
              gap:2
              }}>
              <Box
                component="img"
                sx={{
                  height: 350,
                  width: 350,
                  borderRadius:'100%',
                  maxHeight: { xs: 233, md: 233 },
                  maxWidth: { xs: 233, md: 233 },
                  objectFit:'cover'
                }}
                alt="The house from the offer."
                src={profile.photo ? profile.photo : 'https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
              />
              <Typography mr={1} variant="h3">{profile.first_name}</Typography>
              <Typography variant="h3">{profile.last_name}</Typography>
              <Typography variant="h5">{profile.phone}</Typography>
              <Typography variant="h5">{profile.email}</Typography>
              <Typography variant="h5">{profile.address}</Typography>
            </Box>
       
            <Button onClick={() => isModalOpen(!modalOpen)} sx={{my:3, mr:2}} variant="contained">Edit Profile</Button>
            <Button onClick={() => isModalOpen(!modalOpen)} sx={{my:3}} variant="outlined">Back Home</Button>

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
    </div>
  );
}
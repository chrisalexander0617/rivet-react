import {useEffect, useState, useRef} from 'react'
import {useParams} from 'react-router-dom'
import { ProfileAPI } from '../api/services/Profiles';
import {Box, Typography, Button} from '@mui/material'
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
        Profile 
        <Box>
          <Typography variant="h2">{profile.first_name}</Typography>
          <Typography variant="h5">{profile.last_name}</Typography>
          <Typography variant="h5">{profile.phone}</Typography>
          <Typography variant="h5">{profile.email}</Typography>
          <Typography variant="h5">{profile.address}</Typography>
          <Button onClick={() => isModalOpen(!modalOpen)} sx={{my:3}} variant="contained">Edit Profile</Button>
        </Box>
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
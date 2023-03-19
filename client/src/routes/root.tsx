import { useEffect, useState } from 'react';
import '../App.css';
import {Box, Typography} from '@mui/material'
import {Navbar} from '../components/NavBar/NavBar'
import { ProfileAPI } from '../api/services/Profiles';
import { ProfileType } from '../../src/types/Profile/index'
import { AddNewProfileForm } from '../components/AddNewProfileForm';
import { ProfileTable } from '../components/Profile/ProfileTable';
import { ScreenLoader } from '../components/ScreenLoader';

export const Root = () => {
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [loading, isLoading] = useState<boolean>(true);
  const [modalOpen, isModalOpen] = useState<boolean>(false);

  const loadProfiles = async () => {
    const result = await ProfileAPI.ListProfiles()
    setProfiles(result)
    isLoading(false)
    return result
  }
  
  const handleCloseModal = () =>  {
    isModalOpen(false)
  }

  const handleOpenModal = () =>  {
    isModalOpen(true)
  }

  useEffect(() => {
    loadProfiles()
  }, [loading])

  if (!profiles.length || loading) return <ScreenLoader />

  return (
    <Box p={1} className="App">
      <Navbar handleOpenModal={handleOpenModal} />
        {modalOpen && <AddNewProfileForm handleCloseModal={handleCloseModal} />}
        <Box sx={{
            display:'flex',
            alignItems:'left',
            flexDirection:'column',
            gap:3
          }} 
          p={3}>
          <Typography variant="h4" align="left">Profile Directory</Typography>
          <ProfileTable profiles={profiles} />
        </Box>
    </Box>
  );
}

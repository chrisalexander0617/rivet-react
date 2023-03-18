import { useEffect, useState } from 'react';
import '../App.css';
import { Button } from '@mui/material'
import { ProfileAPI } from '../api/services/Profiles';
import { ProfileType } from '../../src/types/Profile/index'
import { ProfileList } from '../components/Profile/ProfileList';
import { AddNewProfileForm } from '../components/AddNewProfileForm';

export const Root = () => {
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [loading, isLoading] = useState<boolean>(true);
  const [modalOpen, isModalOpen] = useState<boolean>(false);

  const loadProfiles = async () => {
    const result = await ProfileAPI.ListProfiles()
    setProfiles(result)
    return result
  }

  console.log('Handle Close!')
  
  const handleCloseModal = () =>  {
    isModalOpen(!modalOpen)
  }

  useEffect(() => {
    loadProfiles()
  }, [loading])

  if (!profiles.length) return <div>Loading...</div>

  return (
    <div className="App">
      <Button onClick={() => isModalOpen(!modalOpen)}>Add New Profile</Button>
      {modalOpen && <AddNewProfileForm handleClose={handleCloseModal} />}
      <ProfileList profiles={profiles} />
    </div>
  );
}

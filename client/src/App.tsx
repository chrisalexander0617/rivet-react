import React, {useEffect, useState} from 'react';
import './App.css';
import { ProfileAPI } from './api/services/Profiles';
import {ProfileType} from '../src/types/Profile/index'
import { ProfileList } from './components/Profile/ProfileList';

function App() {
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [loading, isLoading] = useState<boolean>(true);

  const loadProfiles = async () => {
    const result = await ProfileAPI.ListProfiles()
    setProfiles(result)
    return result
  }

  useEffect(() => {
   loadProfiles()
  },[loading])

  if(!profiles.length) return <div>Loading...</div>

  return (
    <div className="App">
      <ProfileList profiles={profiles}  />
    </div>
  );
}

export default App;

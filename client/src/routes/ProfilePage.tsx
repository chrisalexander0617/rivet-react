import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { ProfileAPI } from '../api/services/Profiles';
import {Box, Typography} from '@mui/material'


export const ProfilePage = () => {
  const [profile, setProfile] = useState()
  const routeParams = useParams();

  const getSingleProfile = async (id:string) => {
    const result = await ProfileAPI.getProfile(id)
    setProfile(result)
  }

  useEffect(() => {
    if(routeParams.id) getSingleProfile(routeParams.id)
  },[])

  return (
    <div className="App">
        Profile page
    </div>
  );
}

import axios from 'axios'
import {ProfileType, NewProfileType} from '../../../types/Profile';

const config = {
  headers:{
    "token": "004ec00c497c58a80b1e16d70ec78ba1a7f6cff504f02af67af9c530ad9fc591",
    "content-type": "application/json"
  }
}

const ListProfiles = async () => {
  const apiURL = 'https://codechallenge.rivet.work/api/v1/profiles'

  try {
    const response = await axios.get(apiURL, config)
    return response.data
  } catch (err:any){
    console.error('Unable to fetch employee profiles:', err);
    if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
    throw err;
  }
}

const getProfile = async (id:string) => {
  const apiURL = `https://codechallenge.rivet.work/api/v1/profile/${id}`

  try {
    const response = await axios.get(apiURL, config)
    return response.data
  } catch (err){
    throw new Error(`Unable to get the employees profile: ${err}`);
  }
}

const updateProfile = async (id:number, updatedProfile:ProfileType) => {
  const apiURL = `https://codechallenge.rivet.work/api/v1/profile/${id}`

  try {
    await axios.put(apiURL,updatedProfile, config)
    window.location.reload()
  } catch (err){
    throw new Error(`Unable to get the employees profiles: ${err}`);
  }
}

const createNewProfile = async (newProfile:NewProfileType) => {
  const apiURL = `https://codechallenge.rivet.work/api/v1/profile`
  const jsonData = JSON.stringify(newProfile)

  try {
      await axios.post(apiURL, jsonData, config)
      window.location.reload()
  } catch (err:any){
    if (err.response) {
      return err.response.data
    } else if (err.request) {
      return err.request
    } else { return err.message }
  }
}

export const ProfileAPI = {
  ListProfiles, 
  getProfile, 
  updateProfile, 
  createNewProfile
}
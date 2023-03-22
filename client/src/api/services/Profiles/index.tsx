import axios from 'axios'
import { ProfileType, NewProfileType } from '../../../types/Profile';

const config = {
  headers: {
    "token": process.env.REACT_APP_API_TOKEN,
    "content-type": "application/json"
  }
}

const ListProfiles = async () => {
  const apiURL = 'https://codechallenge.rivet.work/api/v1/profiles'

  try {
    const response = await axios.get(apiURL, config)
    return response.data
  } catch (err: any) {
    if (err.response) {
      return err.response.data
    } else if (err.request) {
      return err.request
    } else { return err.message }
  }
}

const getProfile = async (id: string) => {
  const apiURL = `https://codechallenge.rivet.work/api/v1/profile/${id}`

  try {
    const response = await axios.get(apiURL, config)
    return response.data
  } catch (err: any) {
    if (err.response) {
      return err.response.data
    } else if (err.request) {
      return err.request
    } else { return err.message }
  }
}

const updateProfile = async (id: number, updatedProfile: ProfileType) => {
  const apiURL = `https://codechallenge.rivet.work/api/v1/profile/${id}`

  try {
    await axios.put(apiURL, updatedProfile, config)
    window.location.reload()
  } catch (err: any) {
    if (err.response) {
      return err.response.data
    } else if (err.request) {
      return err.request
    } else { return err.message }
  }
}

const createNewProfile = async (newProfile: NewProfileType) => {
  const apiURL = `https://codechallenge.rivet.work/api/v1/profile`
  const jsonData = JSON.stringify(newProfile)

  try {
    await axios.post(apiURL, jsonData, config)
    window.location.reload()
  } catch (err: any) {
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
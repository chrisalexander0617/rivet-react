import axios from 'axios'
import {ProfileType, NewProfileType} from '../../../types/Profile';

const config = {
    headers:{
        "token": "004ec00c497c58a80b1e16d70ec78ba1a7f6cff504f02af67af9c530ad9fc591",
        'content-type': 'application/json'
    }
}

const ListProfiles = async () => {
    const apiURL = 'https://codechallenge.rivet.work/api/v1/profiles'

    try {
        const response = await axios.get(apiURL, config)
        return response.data
    } catch (err){
        console.error('Unable to fetch employee profiles:', err);
        throw err;
    }
}

const getProfile = async (id:string) => {
    const apiURL = `https://codechallenge.rivet.work/api/v1/profile/${id}`

    try {
        const response = await axios.get(apiURL, config)
        return response.data
    } catch (err){
        console.error('Unable to fetch employee profiles:', err);
        throw err;
    }
}

const updateProfile = async (id:number, updatedProfile:ProfileType) => {
    const apiURL = `https://codechallenge.rivet.work/api/v1/profile/${id}`


    try {
        const response = await axios.put(apiURL,updatedProfile, config)
        window.location.reload()
    } catch (err){
        console.error('Unable to fetch employee profiles:', err);
        throw err;
    }
}

const createNewProfile = async (newProfile:NewProfileType) => {
    const apiURL = `https://codechallenge.rivet.work/api/v1/profile`

    console.log('Here is the new profile', newProfile)

    const jsonData = JSON.stringify(newProfile)

    console.log('jsonData', jsonData)

    try {
        const response = await axios.post(apiURL, jsonData, config)
        window.location.reload()
    } catch (err){
        console.error('Unable to fetch employee profiles:', err);
        throw err;
    }
}

export const ProfileAPI = {
    ListProfiles, 
    getProfile, 
    updateProfile, 
    createNewProfile
}
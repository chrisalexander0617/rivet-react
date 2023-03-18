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
    } catch (err:any){
        console.error('Unable to fetch employee profiles:', err);
        if (err.response) {

            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {

            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(err.request);
          } else {
            // Something happened in setting up the request that triggered an Error
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
        const response = await axios.put(apiURL,updatedProfile, config)
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
        console.log('successful post')
        window.location.reload()
    } catch (err:any){
        if (err.response) {

            return err.response.data

          } else if (err.request) {

            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            
            return err.request
          } else {

            // Something happened in setting up the request that triggered an Error
            return err.message
        }
    }
}

export const ProfileAPI = {
    ListProfiles, 
    getProfile, 
    updateProfile, 
    createNewProfile
}
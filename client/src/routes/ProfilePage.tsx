import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ProfileAPI } from '../api/services/Profiles';
import {
    Box,
    Container,
    Typography,
    Button,
    Skeleton
} from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { EditProfileForm } from '../components/EditProfileForm';
import { isValidHttpUrl } from '../utils'

export const ProfilePage = () => {
    const mounted = useRef(false)
    const [profile, setProfile] = useState<any>()
    const [modalOpen, isModalOpen] = useState<boolean>(false)
    const routeParams = useParams();

    const getSingleProfile = async (id: string) => {
        const result = await ProfileAPI.getProfile(id)
        if (result) setProfile(result)
    }

    const styles = {
        ProfileWrapper: {
            textAlign: 'left'
        },
        FlexBox: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'left',
            gap: 2
        },
        ProfileImage: {
            height: 350,
            width: 350,
            borderRadius: '100%',
            maxHeight: { xs: 233, md: 233 },
            maxWidth: { xs: 233, md: 233 },
            objectFit: 'cover',
            border: 'solid white 15px'
        },
        Header: {
            height: '300px',
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(33,33,255,1) 0%, rgba(188,0,255,1) 100%)'
        }
    }

    const handleCloseModal = () => isModalOpen(false)

    useEffect(() => {
        mounted.current = true

        if (mounted.current) {
            if (routeParams?.id) {
                getSingleProfile(routeParams.id)
            } else { console.log('No profile') }
        }

        return () => { mounted.current = false }
    }, [routeParams.id])

    return (
        <Box className="App">
            <Box sx={styles.Header}></Box>
            <Container>
                <Box py={5} sx={styles.ProfileWrapper}>
                    <Box mt={-20} sx={styles.FlexBox}>
                        <Box
                            component="img"
                            sx={styles.ProfileImage}
                            alt="The house from the offer."
                            src={isValidHttpUrl(profile?.photo) ? profile?.photo : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                            {!profile ? <Skeleton variant="rectangular" width={200} height={30} /> : <Typography fontWeight={700} mr={1} variant="h4">{profile.first_name}</Typography>}
                            {!profile ? <Skeleton variant="rectangular" width={200} height={30} /> : <Typography fontWeight={700} variant="h4">{profile.last_name}</Typography>}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <SmartphoneOutlinedIcon />
                            {!profile ? <Skeleton variant="rectangular" width={200} height={30} /> : <Typography variant="h5">{profile.phone}</Typography>}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <MailOutlineIcon />
                            {!profile ? <Skeleton variant="rectangular" width={200} height={30} /> : <Typography variant="h5">{profile.email}</Typography>}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <HomeOutlinedIcon />
                            {!profile ? <Skeleton variant="rectangular" width={200} height={30} /> : <Typography variant="h5">{profile.address}</Typography>}
                            {!profile ? <Skeleton variant="rectangular" width={200} height={30} /> : <Typography variant="h5">{profile.city}, </Typography>}
                            {!profile ? <Skeleton variant="rectangular" width={200} height={30} /> : <Typography variant="h5">{profile.state}</Typography>}
                        </Box>
                        {!profile ? <Skeleton variant="rectangular" width={400} height={50} /> : <Typography variant="h5">{profile.notes}</Typography>}
                    </Box>
                    <Button onClick={() => isModalOpen(!modalOpen)} sx={{ my: 3, mr: 2 }} variant="contained">Edit Profile</Button>
                    <Button href="/" sx={{ my: 3 }} variant="outlined">Back Home</Button>
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
                    handleCloseModal={handleCloseModal}
                />)}
        </Box>
    );
}
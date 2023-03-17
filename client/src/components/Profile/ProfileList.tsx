import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { ProfileListType } from '../../types/Profile/index'
import { Link } from 'react-router-dom'
import { isValidHttpUrl } from '../../utils'

export const ProfileList: React.FC<ProfileListType> = ({ profiles }) => {
  const styles = {
    profileCard: {
      backgroundColor: '#f8f8f8',
      textAlign: 'left',
      textDecoration: 'none',
      border: 'solid 1px black'
    }
  }

  return (
    <Container>
      <Grid spacing={3} container>
        {profiles.map((profile, i) => (
          <Grid item xs={3} md={4}>
            <Link to={`/profile/${profile.id.toString()}`}>
              <Box sx={styles.profileCard} p={3}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center'
                }} key={i}>
                  <Box
                    component="img"
                    sx={{
                      height: 50,
                      width: 50,
                      borderRadius: '100%',
                      maxHeight: { xs: 233, md: 233 },
                      maxWidth: { xs: 233, md: 233 },
                      objectFit: 'cover',
                      marginRight: 3,
                    }}
                    alt="No Image"
                    src={isValidHttpUrl(profile.photo) ? profile.photo : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                  />
                  <Box>
                    <Typography color="black" variant="h5">{profile.first_name}</Typography>
                    <Typography color="black" variant="h5">{profile.last_name}</Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
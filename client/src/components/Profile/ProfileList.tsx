import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { ProfileListType } from '../../types/Profile/index'
import { Link } from 'react-router-dom'

export const ProfileList: React.FC<ProfileListType> = ({ profiles }) => {
  const styles = {
    profileCard: {
      backgroundColor: '#f8f8f8',
      textAlign: 'left',
      textDecoration: 'none',
      border: 'solid 1px black'
    }
  }

  const isValidHttpUrl = (str: string) => {
    let url;
    try {
      url = new URL(str);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
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
                    src={isValidHttpUrl(profile.photo) ? profile.photo : 'https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
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
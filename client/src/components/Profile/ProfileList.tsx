import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { ProfileListType } from '../../types/Profile/index'
import { Link } from 'react-router-dom'

export const ProfileList: React.FC<ProfileListType> = ({ profiles }) => {
  const styles = {
    profileCard: {
      backgroundColor: '#efefef',
      textAlign: 'left',
      textDecoration: 'none'
    }
  }

  return (
    <Container>
      <Grid spacing={1} container>
        {profiles.map((profile, i) => (
          <Grid item xs={4} md={3}>
            <Link to={`/profile/${profile.id.toString()}`}>
              <Box sx={styles.profileCard} p={3}>
                <div key={i}>
                  <Typography color="black" variant="h5">{profile.first_name}</Typography>
                  <Typography color="black" variant="h5">{profile.last_name}</Typography>
                </div>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
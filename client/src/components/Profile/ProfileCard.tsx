import { Box, Typography } from '@mui/material'
import { ProfileType } from '../../types/Profile'

export const ProfileCard = (props: ProfileType) => {
  return (
    <>
      <Box>
        <Typography>{props.first_name}</Typography>
        <Typography>{props.last_name}</Typography>
        <Typography>{props.phone}</Typography>
        <Typography>{props.email}</Typography>
        <Typography>{props.address}</Typography>
        <Typography>{props.city}</Typography>
        <Typography>{props.state}</Typography>
        <Typography>{props.zip}</Typography>
        <Typography>{props.photo}</Typography>
        <Typography>{props.notes}</Typography>
      </Box>
    </>
  )
}
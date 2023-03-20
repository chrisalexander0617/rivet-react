import {Box, Typography, Button} from '@mui/material'

interface NavbarProps {
  handleOpenModal:() =>  void
}

export const Navbar = (props:NavbarProps) => {
  const styles = {
    NavBarWrapper:{
      display:'flex',
      gap:1,
      justifyContent:'space-between',
      alignItems:'center'
    }
  }

  return ( 
    <>
      <Box p={3} sx={styles.NavBarWrapper}>
        <Typography fontWeight={700} variant="h4" align="left">Profile Directory</Typography>
        <Button variant="contained" onClick={props.handleOpenModal}>Add New Profile</Button>
      </Box>
    </>
  )
}
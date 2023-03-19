import {Box, Typography, Button} from '@mui/material'

interface NavbarProps {
  handleOpenModal:() =>  void
}

export const Navbar = (props:NavbarProps) => {
  const styles = {
    NavBarWrapper:{
      display:'flex',
      gap:1,
      justifyContent:'right',
      alignItems:'center'
    }
  }

  return ( 
    <>
      <Box p={3} sx={styles.NavBarWrapper}>
        <Button variant="contained" onClick={props.handleOpenModal}>Add New Profile</Button>
      </Box>
    </>
  )
}
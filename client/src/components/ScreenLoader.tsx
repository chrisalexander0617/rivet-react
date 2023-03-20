import { 
  Box, 
  CircularProgress, 
  Typography 
} from "@mui/material";

export const ScreenLoader = () => {
  const styles = {
    display:'flex',
    height:'100vh',
    width:'100vw',
    position:'fixed',
    top:0,
    left:0,
    zIndex:50,
    alignItems:'center',
    justifyContent:'center'
  }
  
  return (
    <Box sx={styles}>
      <Box sx={{display:'flex', gap:3, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Typography color="primary" variant="h3">Loading Profiles</Typography>
        <CircularProgress size={100} />
      </Box>
    </Box>
  )
}
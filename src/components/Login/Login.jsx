import './login.css'
import {Grid ,Paper,Avatar,Button} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
const Login = () =>{
 
  const navigate =useNavigate();
  const paperStyle ={padding:50, height:'40vh',width:200,margin:"100px auto"}
  const avatarStyle={backgroundColor:'purple'}
   return(
         <Grid>
         <Paper elevation= {10} style={paperStyle}>
          <Grid align="center">
           <Avatar style= {avatarStyle}><LockOutlinedIcon/></Avatar>
           <h2>Sign in as</h2>
           </Grid>
           <Grid align="center">
           <Button onClick ={() => navigate("/adminLogin")}variant="contained" sx={{width:"10rem",padding:1 ,}}>ADMIN</Button>
           <Button onClick ={() => navigate("/employeeLogin")} variant="contained" sx={{width:"10rem",padding:1 ,marginTop:3}}>EMPLOYEE</Button>
           </Grid>

         </Paper>
         </Grid>
    
   ) 
}
 
export default Login;
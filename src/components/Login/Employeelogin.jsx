import {Grid ,Paper,Avatar, TextField, Button} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';;
import FormControlLabel from '@mui/material/FormControlLabel'
import {Link, Route, Routes} from 'react-router-dom';
const Employeelogin = () =>{
  const paperStyle ={padding:40, height:'60vh',width:200,margin:"90px auto"}
  const avatarStyle={backgroundColor:'purple'}
   return(
         <Grid>
         <Paper elevation= {10} style={paperStyle}>
          <Grid align="center">
           <Avatar style= {avatarStyle}><LockOutlinedIcon/></Avatar>
           <h2>EMPLOYEE</h2>
           </Grid>
          <TextField margin="normal" label='Username' placeholder ="Enter username" type ="text"/>
          <TextField margin="normal"label='Password' placeholder ="Enter password" type="password"/>
          <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Link to="/EmployeeDashboard">
      <Button  type ="submit" variant ="outlined" color='primary' fullWidth>Sign in</Button>
      </Link>
         </Paper>
         </Grid>
    
   ) 
}
 
export default Employeelogin;
import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {signOut} from 'aws-amplify/auth'

const DashboardPage = (props) => {
    
    const navigate=useNavigate();

    const handleLogout= async() =>{
      await signOut();
      props.updateAuthStatus(false);
      navigate('/login')
    }
    // useEffect(()=>{
    //     props.isAuthenticated !== true && (
    //         navigate('/')
    //     )
    // },[])

  return (
    <div>
      <Button onClick={handleLogout}>Sign Out</Button>
    </div>
    
  )
}

export default DashboardPage;
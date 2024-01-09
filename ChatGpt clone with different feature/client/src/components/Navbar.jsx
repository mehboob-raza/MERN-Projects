import { jsx } from '@emotion/react'
import { Box, Typography, useTheme } from '@mui/material'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { apiPort } from '../App'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
    const navigate = useNavigate()


    const handleLogout = async () => {
        try {
            await axios.post(`${apiPort}/api/v1/auth/logout`)
            toast.success(`Logout successfully`)
            localStorage.removeItem('authToken')
            navigate('/login')
        } catch (err) {
            console.log(err);
        }
    }
    const loggedIn = JSON.parse(localStorage.getItem('authToken'))
    const theme = useTheme()

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem 1rem',
        }}>
            <Box p='1rem 6%' textAlign='center' className='div' >
                <NavLink to='/' style={{
                    textDecoration: 'none',
                }}>
                    <Typography variant='h4' className='p' >
                        Mini ChatGPT
                    </Typography>
                </NavLink>
            </Box>
            {
                loggedIn ?
                    (<Box display='flex' alignItems='center' gap={6}>

                        <NavLink to='/' style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                        }}

                        >
                            Home
                        </NavLink>
                        <NavLink to='/login' style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                            onClick={handleLogout}
                        >
                            Logout
                        </NavLink>
                    </Box>)
                    : (<Box display='flex' alignItems='center' gap={6}>
                        <NavLink to='/register' style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                        }}>
                            Register
                        </NavLink>
                        <NavLink to='/login' style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                        }}>
                            Sign In
                        </NavLink>
                    </Box>)
            }
        </Box>

    )
}

export default Navbar

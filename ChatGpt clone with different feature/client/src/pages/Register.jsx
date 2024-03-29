import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import { apiPort } from '../App';

// TODO remove, this demo shouldn't need to reset the theme.


export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${apiPort}/api/v1/auth/register`, { username, email, password })
            toast.success(`${username} registered successfully`)
            navigate('/login')
        } catch (err) {
            // console.log(err.message);

            if (err.response.data.error) {
                setError(err.response.data.error)
            }
            else {
                setError(err.message)
            }
            setTimeout(() => setError(), 5000)

        }

    };

    return (

        <Box >

            <Container component="main" maxWidth="xs" sx={{
                bgcolor: '#fff',
                p: 4,
                borderRadius: 3,
                mb: 6
            }}>
                {
                    error && <Collapse in={true}>
                        <Alert severity='error' >
                            {error}
                        </Alert>
                    </Collapse>
                }
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="User Name"
                                    autoFocus
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>

    );
}
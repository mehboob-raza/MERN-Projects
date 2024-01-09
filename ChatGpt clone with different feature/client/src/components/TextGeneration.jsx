import { Box, Typography, Card, Container, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Description } from '@mui/icons-material'

const TextGeneration = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Container maxWidth="lg">
                <Typography variant="h4" mb={2} fontWeight="bold">
                    Text Generation
                </Typography>
                <Card
                    onClick={() => navigate('/summary')}
                    sx={{
                        boxShadow: 2,
                        borderRadius: 5,
                        height: 190,
                        width: '100%',
                        p: 4,
                        '&:hover': {
                            boxShadow: 0,
                            border: 2,
                            borderColor: 'primary.dark',
                            cursor: 'pointer',
                            color: 'blue'
                        }
                    }}
                >

                    <Box display='flex' alignItems='center' justifyContent='space-around' mt={2}>
                        <Description
                            sx={{
                                fontSize: 80,
                                color: 'primary.main',
                            }}
                        />
                        <Stack>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: 'bold',
                            }} >
                                Go To Summary
                            </Typography>
                            <Typography>
                                Summarize the Long Text into Short Sentences
                            </Typography>
                        </Stack>
                    </Box>
                </Card>
            </Container>
        </div>
    )
}

export default TextGeneration

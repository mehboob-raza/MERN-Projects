import { Box, Typography, Card, Stack, Container } from '@mui/material'
import { ChatRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'


const Scifiimage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Container maxWidth='lg'>
                <Box p={2}>
                    <Typography variant="h4" mb={2} fontWeight="bold">
                        AI SCIFI Images
                    </Typography>
                    <Card
                        onClick={() => navigate("/scifi-image")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 190,
                            width: '100%',
                            "&:hover": {
                                border: 2,
                                boxShadow: 0,
                                borderColor: "primary.dark",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <ChatRounded
                            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
                        />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant="h5">
                                Scifi Image
                            </Typography>
                            <Typography variant="h6">Generate Scifi images</Typography>
                        </Stack>
                    </Card>
                </Box>
            </Container>
        </div>
    )
}

export default Scifiimage

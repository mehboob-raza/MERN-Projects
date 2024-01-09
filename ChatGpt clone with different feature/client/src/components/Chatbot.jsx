import { Box, Typography, Card, Stack, Container } from '@mui/material'
import { ChatRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Chatbot = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container maxWidth='lg'>
                <Box p={2}>
                    <Typography variant="h4" mb={2} fontWeight="bold">
                        AI ChatBot
                    </Typography>
                    <Card
                        onClick={() => navigate("/chatbot")}
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
                                Chatbot
                            </Typography>
                            <Typography variant="h6">Chat With AI Chatbot</Typography>
                        </Stack>
                    </Card>
                </Box>
            </Container>
        </div>
    )
}

export default Chatbot

import { Box, Typography, Card, Stack, Container } from '@mui/material'
import { ChatRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Jsconverter = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Container maxWidth='lg'>
                <Box p={2}>
                    <Typography variant="h4" mb={2} fontWeight="bold">
                        Javascript Converter
                    </Typography>
                    <Card
                        onClick={() => navigate("/js-converter")}
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
                                JS CONVERTER
                            </Typography>
                            <Typography variant="h6">
                                Trasnlate english to javascript code
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
            </Container>
        </div>
    )
}

export default Jsconverter

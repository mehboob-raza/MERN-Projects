import { Box, Typography, Card, Container, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FormatAlignLeftRounded } from '@mui/icons-material'

const ParagraphGenerator = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Container maxWidth="lg">
                <Box p={2}>
                    <Typography variant="h4" mb={2} fontWeight="bold" >
                        Paragraph Generator
                    </Typography>
                    <Card
                        onClick={() => navigate('/paragraph')}
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
                            <FormatAlignLeftRounded
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
                </Box>
            </Container>
        </div>
    )
}

export default ParagraphGenerator

import { Box } from '@mui/material'
import TextGeneration from '../components/TextGeneration'
import ParagraphGenerator from '../components/ParagraphGenerator'
import ChatBot from './Chatbot'
import Chatbot from '../components/ChatBot'
import Scifiimage from '../components/ScifiImage'
import Jsconverter from '../components/JsConverter'

const Homepage = () => {
    return (
        <Box mt={12} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <TextGeneration />
            <ParagraphGenerator />
            <Chatbot />
            <Scifiimage />
            <Jsconverter />

        </Box >
    )
}

export default Homepage

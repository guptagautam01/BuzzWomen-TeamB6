import NavBar from './components/NavBar';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import HeroSection from './components/HeroSection';
import { Container } from '@mui/material';
import Chatbot from './components/Chatbot';
import ChatbotHi from './components/ChatbotHi';
import { useState } from 'react';
import ChatbotKn from './components/ChatbotKn';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5812E',
      light: '#fff3e0'
    },
    tomato: '#FF6347',
  },
  typography: {
    fontFamily: [
      "Poppins",
      "sans-serif"
    ].join(",")
  }
});
// #fff3e0
function App() {
  const [language, setLanguage] = useState("hi");
  return (
   <ThemeProvider theme={theme}>
       <NavBar />
       <Container>
          <HeroSection setLanguage ={setLanguage}/> 
       </Container>
       {language ==="en" && <Chatbot />}
       {language ==="hi" && <ChatbotHi />}
       {language ==="kn" && <ChatbotKn />}
       {/* <Chatbot /> */}
       {/* <Chatbot_hi /> */}
   </ThemeProvider>
  );
}

export default App;

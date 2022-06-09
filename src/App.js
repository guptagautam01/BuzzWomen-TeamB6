import NavBar from './components/NavBar';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import HeroSection from './components/HeroSection';
import { Container } from '@mui/material';
import BlogSection from './components/BlogSection';
// import ContactUs from './components/ContactUs';


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
      "Arial",
      "sans-serif"
    ].join(",")
  }
});
// #fff3e0
function App() {
  return (
   <ThemeProvider theme={theme}>
       <NavBar />
       <Container>
          <HeroSection/> 
          <BlogSection />
       </Container>
   </ThemeProvider>
  );
}

export default App;
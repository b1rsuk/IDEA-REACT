import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'normalize.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header/Header';
import AboutCompany from './AboutCompany/AboutCompany';
import Projects from './Projects/Projects';
import Main from './Main/TargetCompany';
import Product from './Product/Product';
import Footer from './Footer/Footer';
import Title from './Title/Title';

const theme = createTheme({
    palette: {
      colors: {
        blue: '#8E88C1', 
        background: '#30345A',
        light: '#3F50E7',
        backgroundBox: '#827EAC',
        background2: '#071341',
        orange: '#FF6853',
        pink: '#FF537C',
        greenLight: '#80D2C4',
        blue2: '#3F50E7',
        green: '#95CB7C'
      },
      text: {
        main: '#cfcde5',
      },
      map: {
        background: '#4B4864',
        input: '#646081'
      }
    }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <AboutCompany/>
      <Projects/>
      <Title/>
      <Main/>
      <Product/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

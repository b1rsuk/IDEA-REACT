import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import map from '../img/map.png';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor: '#8E88C1',
    fontSize: 16,
    width: '100vh',
    padding: '10px 12px',
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
}));




const Product = () => {
    return (
        <Grid container p={8} sx={{
            backgroundImage: `url(${map})`,
            display: 'flex',
            justifyContent: {
                md: 'flex-end',
                xs: 'center'
            }
        }}>
          <Grid item xs={12} md={4}>
              <Box p={2} sx={{
                  backgroundColor: 'map.background',
                  height: 380,
              }}>
                  <Typography variant='h3' component='h3' color='white' sx={{
                      fontWeight: 700,
                      fontSize: '26px'
                  }}>Задать вопрос</Typography>
                 <Typography variant='h4' component='h4' color='colors.blue' mt={1} sx={{
                      fontWeight: 500,
                      fontSize: '14px'
                  }}>Менеджеры компании с радостью ответят на ваши вопросы и произведут расчет стоимости услуг</Typography>
                    
                    <Typography variant='h6' component='h6' color='text.main' sx={{
                        fontSize: '14px',
                        fontWeight: 500
                    }}>Имя: </Typography>
                    <Box sx={{
                        width: '100%',
                        overflow: 'hidden',
                        borderRadius: 1,
                    }}>
                        <BootstrapInput id="bootstrap-input" />
                    </Box>

                    <Typography variant='h6' component='h6' color='text.main' sx={{
                        fontSize: '14px',
                        fontWeight: 500
                    }}>Номер телефона: </Typography>
                        <Box sx={{
                            width: '100%',
                            overflow: 'hidden',
                            borderRadius: 1,
                        }}>
                            <BootstrapInput id="bootstrap-input" />
                        </Box>
                    <Typography variant='h6' component='h6' color='text.main' sx={{
                        fontSize: '14px',
                        fontWeight: 500
                    }}>Почта: </Typography>
                        <Box sx={{
                            width: '100%',
                            overflow: 'hidden',
                            borderRadius: 1,
                        }}>
                            <BootstrapInput id="bootstrap-input" />
                        </Box>
              </Box>
          </Grid>
        </Grid>
    );
}
export default Product;
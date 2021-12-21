import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Vk from '../img/Vk';
import Mail from '../img/Mail';
import Twitter from '../img/Twitter';
import WhatsApp from '../img/WhatsApp';
import Instagram from '../img/Instagram';

const Footer = () => {
    return (
        <Grid container p={4} spacing={2} justifyContent='center' sx={{
            backgroundColor: 'colors.background',
            display: 'flex',
            flexDirection: {
                md: 'row',
                xs: 'column'
            },
            alignItems: {
                md: 'flex-start',
                xs: 'center'
            }
        }}>
            <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h3' mb={2} color='white' sx={{
                    fontSize: '16px',
                    fontWeight: 700,
                    textAlign: {
                        md: 'left',
                        xs: 'center'
                    }
                }}>Блог</Typography>

                <Typography variant='h4' component='h4' color='white' sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    textAlign: {
                        md: 'left',
                        xs: 'center'
                    }
                }}>
                One posotion<br/>
                One posotion<br/>
                One posotion<br/>
                One posotion
                </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h3' mb={2} color='white' sx={{
                    fontSize: '16px',
                    fontWeight: 700,
                    textAlign: {
                        md: 'left',
                        xs: 'center'
                    }
                }}>Наша продукция</Typography>

                <Typography variant='h4' component='h4' color='white' sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    textAlign: {
                        md: 'left',
                        xs: 'center'
                    }
                }}>
                One posotion<br/>
                One posotion<br/>
                One posotion<br/>
                One posotion<br/>
                One posotion
                </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                <Typography variant='h3' component='h3' mb={2} color='white' sx={{
                    fontSize: '16px',
                    fontWeight: 700,
                    textAlign: {
                        md: 'left',
                        xs: 'center'
                    }
                }}>Мы в соц. сетях</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>
                    <Vk/>
                    <Mail/>
                    <Twitter/>
                    <WhatsApp/>
                    <Instagram/>
                </Box>
            </Grid>
        </Grid>
    );
}
export default Footer;
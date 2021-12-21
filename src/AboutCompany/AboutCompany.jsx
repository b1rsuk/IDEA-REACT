import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import image from '../img/d78.png';

const AboutCompany = () => {
    return (
        <Box p={4} sx={{ 
            flexGrow: 1,
            backgroundColor: 'colors.background2'
        }}>
        <Grid container spacing={5} sx={{
            display: 'flex',
            alignItems: {
                xs: 'center',
                md: 'flex-start'
            },
            flexDirection: {
                xs: 'column',
                md: 'row'
            }
        }}>
          <Grid item xs={12} md={8}>
            <Button variant="contained" size="large" sx={{
                backgroundColor: 'map.background',
                fontSize: '14px',
                fontWeight: 400,
                color: 'text.main',
                display: 'block',
                margin: {
                    xs: 'auto',
                    md: 0
                }
            }}>One position</Button>

            <Typography component='h2' variant='h2' mt={2} color='white' sx={{
                fontSize: '36px',
                fontWeight: 700,
                textAlign: {
                    xs: 'center',
                    md: 'left'
                }
            }}>One position</Typography>
            <Typography component='h2' variant='h2' color='white' sx={{
                fontSize: '36px',
                fontWeight: 700,
                textAlign: {
                    xs: 'center',
                    md: 'left'
                }
            }}>One position</Typography>

            <Typography component='h4' variant='h4' mt={2} mb={8} color='text.main' sx={{
                fontWeight: 500,
                fontSize: '16px',
                textAlign: {
                    xs: 'center',
                    md: 'left'
                }
            }}>One posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotionOne posotion</Typography>
                <Button variant="contained" sx={{
                    height: '56px',
                    width: '200px',
                    borderRadius: '8px',
                    backgroundColor: 'colors.light',
                    fontSize: '16px',
                    fontWeight: 300,
                    boxShadow: '10px 10px 0 #00FFE033',
                    display: 'block',
                    margin: {
                        xs: 'auto',
                        md: 0
                    }
                }}>О компании</Button>
          </Grid>
          <Grid item xs={7} md={4}>
              <Box p={2} sx={{
                  backgroundColor: 'colors.backgroundBox',
                  borderRadius: '8px'
              }}>
                  <img src={image} alt="idea" style={{
                      maxWidth: '100%',
                      height: 'auto'
                  }}/>
              </Box>
          </Grid>
        </Grid>
      </Box>
    );
}
export default AboutCompany;

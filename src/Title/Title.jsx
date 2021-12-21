import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Title = () => {
    return (
        <Grid container justifyContent='center' p={4} sx={{
            backgroundColor: 'colors.background2'
        }}>
            <Grid item md={12} mt={5} mb={7}>
                <Typography variant='h2' component='h2' color='white' align='center' sx={{
                    fontSize: '36px',
                    fontWeight: 700,
                }}>Главной целью компания является разработка, производство и распространение светового оборудования самого высокого качества</Typography>
                <Typography variant='h5' component='h5' mt={2} color='text.main' align='center' sx={{
                    fontSize: '16px',
                    fontWeight: 500
                }}>Для нас очень важно идти в ногу со временем</Typography>
            </Grid>
         </Grid>
    );
}
export default Title;
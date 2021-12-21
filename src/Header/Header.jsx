import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => {
    const list = [
        'Главная',
        'Проекты',
        'Каталог',
        'Контакты',
        'Блог'
    ];

    return (
        <Box p={4} sx={{ 
            flexGrow: 1,
            backgroundColor: 'colors.background'
        }}>
            <Grid container alignItems='center' spacing={1}>
                <Grid item xs={12} md={5}>
                    <Typography component='h1' variant='h1' color='white' sx={{
                        fontWeight: 700,
                        fontSize: '18px',
                        textAlign: {
                            xs: 'center',
                            md: 'left'
                        }
                    }}>One position</Typography>
                </Grid>
                {
                    list.map((e, index) => 
                    <Grid key={index} item xs={12} md={1}>
                        <Typography component='h4' variant='h4' align='center' color='text.main' sx={{
                        fontSize: '16px',
                        fontWeight: 500
                    }}>{e}</Typography>
                    </Grid>
                    )
                }
                <Grid item xs={12} md={2}>
                    <Button variant="contained" size="large" sx={{
                        backgroundColor: 'map.background',
                        fontSize: '14px',
                        fontWeight: 400,
                        display: 'block',
                        margin: 'auto'
                    }}>Нужен звонок</Button>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Header;
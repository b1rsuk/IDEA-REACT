import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import city from '../img/city.png';
import Sun from '../img/Sun';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Main = () => {
    const list = [
        'One position1',
        'One position2',
        'One position3',
        'One position4',
    ];
    return (
        <Box sx={{ 
            flexGrow: 1,
            backgroundColor: 'colors.background2'
            }}>
            <Grid container p={4} columns={50} spacing={2} sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row'
                },
                alignItems: {
                    xs: 'center',
                    md: 'flex-start'
                }
            }}>
                <Grid item md={10} xs={50}>
                    <Box sx={{
                        backgroundColor: 'white',
                        height: 300,
                        borderRadius: '9px',
                        minWidth: '150px'
                    }}>
                        <Box  sx={{
                            height: 150,
                            background: 'linear-gradient(#FF6753, #FF537C)',
                            backgroundImage: `url(${city})`,
                            backgroundSize: '100%', 
                            backgroundRepeat: 'no-repeat', 
                            borderRadius: '9px 9px 0 0',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Sun width={70} height={70}/>
                            <Typography component='h5' variant='h5' color='white' sx={{
                                fontSize: '16px',
                                fontWeight: 700
                            }}>Технологическая ячейка uLite</Typography>
                        </Box>
                        <Box p={4} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <Typography component='h5' variant='h5' mb={5} color='text.main' sx={{
                                fontSize: '14px',
                                fontWeight: 500
                            }}>One posotion</Typography>
                            <Button variant="contained" sx={{
                                borderRadius: '20px',
                                backgroundColor: 'blue.light',
                                fontSize: '14px',
                                fontWeight: 500,
                            }}>Подробнее</Button>
                        </Box>
                    </Box>
                </Grid>
                {
                    list.map((e, index) => <Grid key={index} item xs={50} md={10}>
                        <Box  p={1} sx={{
                            height: 150,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            border: '1px solid #8E88C1',
                            borderRadius: 2,
                            minWidth: {
                                
                            }
                        }}>
                            <Sun color='#8E88C1' width={70} height={70}/>
                            <Typography component='h5' variant='h5' color='colors.blue' sx={{
                                    fontSize: '16px',
                                    fontWeight: 500
                            }}>{e}</Typography>
                        </Box>
                    </Grid>
                    )
                }

            </Grid>
        </Box>
    )
}
export default Main;
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Sun from '../img/Sun';
import Typography from '@mui/material/Typography';


  
const Projects = () => {
    const list = [
        {title: '+3400', text: 'Проект1', color: 'colors.orange'},
        {title: '+3400', text: 'Проект2', color: 'colors.pink'},
        {title: '+3400', text: 'Проект3', color: 'colors.greenLight'},
        {title: '+3400', text: 'Проект4', color: 'colors.blue'},
        {title: '+3400', text: 'Проект5', color: 'colors.green'},
    ];
    return (
        <Box p={4} sx={{ 
            flexGrow: 1,
            backgroundColor: 'colors.background2'
        }}>
            <Grid container columns={25} spacing={1}>
                {
                    list.map((e, index) =><Grid key={index} item xs={25} md={5} sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Box mr={1} sx={{
                            width: 50,
                            borderRadius: 1,
                            padding: 1,
                            backgroundColor: e.color,
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Sun/>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <Typography component='h5' variant='h5' color='white' sx={{
                                fontSize: '16px',
                                fontWeight: 700
                            }}>{e.title}</Typography>
                            <Typography component='h5' variant='h5' color='text.main' sx={{
                                fontSize: '16px',
                                fontWeight: 500
                            }}>{e.text}</Typography>
                        </Box>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
}
export default Projects;
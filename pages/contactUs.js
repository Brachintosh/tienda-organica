import Image from 'next/image';
// import logoTiendaOrganica from "/public/AlmaZenLogo.png";
// import tabla from "/public/tabla.jpeg";
import tomateCherry from "/public/tomateCherry.avif";
import verdus from "/public/verdus.jpeg";
import PageLayout from '../components/PageLayout';
import { Box, Grid, Paper, Stack, Typography, } from '@mui/material';
import SocialIcons from '../molecules/SocialIcons';

const ContactUs = () => {

  return (
    <>
      <PageLayout title="Contactános" icon='/logoTiendaOrg.png'>
        <Box sx={{pb: "5em"}}>
          {/* TITLE */}
          <Box sx={{ p: "4em 0", background: `url("https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") no-repeat fixed center`,}}>
            <Stack direction="row" alignItems="center" justifyContent="space-around">
              {/* Left */}
              <Box>
                <Typography color="#FAFAFA" variant="h3">Contactanos</Typography>
              </Box>
              {/* Right */}
              <Box sx={{ display: { xs: "none", lg: "block" ,} }}>
                <Box sx={{  minHeight: "15em", minWidth: "15em", border: "solid #DCEDC8 .5px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "2px 3px 6px #fafafa", bgcolor: "#343434", fontWeight: 700,  }}>
                  <Typography color="#FAFAFA" variant="h6">esta caja puede ser util</Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          {/* CARD + RIGHT-IMG */}
          <Stack direction="row" alignItems="center" justifyContent="space-between" pt="3em" m="0 1.5em" spacing={2}>
            {/* Left */}
            <Paper elevation={1} sx={{ p: "2.5em 4em",}}>
              <Box>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={4} sx={{ m: 0, p: 0, }} >
                  <Typography color="#343434" variant="h3">Informacion:</Typography>
                  <Typography variant="h5" color="#343434">¡Ahora podés programar tu pedido!</Typography>
                  <Typography variant="body1" color="#343434">Programá tu pedido para todas las semanas, y retíralo por nuestra tienda o te lo llevamos a tu casa.</Typography>
                  <Typography variant="h3" color="#343434">¡Consultanos!</Typography>
                </Stack>
              </Box>
            </Paper>
            {/* Right */}
            <Box sx={{ display: { xs: "none", lg: "block" ,}, mr: "4em", minHeight: "18em", minWidth: "20em", border: "solid green .1px", borderRadius: "8px"}}>
              <Image alt="Imagen de verduras" src={tomateCherry} layout="responsive" height="2.5em" width="2.7em" /> 
            </Box>
          </Stack>    

          {/* LEFT-IMG + BOX  */}
          <Stack direction="row" alignItems="center" justifyContent="space-evenly" pt="5em" m="0 1.5em">
            {/* Left */}
            <Box sx={{ display: { xs: "none", lg: "block" ,},minHeight: "30em", minWidth: "30em", border: "solid green .1px", borderRadius: "8px"}}>
              <Image alt="Imagen de verduras" src={verdus} layout="responsive" height="1.5em" width="1.5em" /> 
            </Box>
            {/* Right */}
            <Box>
              <Stack direction="column" justifyContent="center" alignItems="center" spacing={8} sx={{ border: "solid tomato .1p", p: "3em 1.5em"}}>
                <Typography color="#343434" variant="h3">Novedades</Typography>
                <Typography variant="h4" color="#343434">¡Ahora podés programar tu pedido!</Typography>
                <Typography variant="body1" color="#343434">Programá tu pedido para todas las semanas, y retíralo por nuestra tienda o te lo llevamos a tu casa.</Typography>
                <Typography variant="h3" color="#343434">¡Consultanos!</Typography>
              </Stack>
            </Box>
          </Stack>  

          {/* SIMPLE STACK */}
          <Stack direction="row" alignItems="center" justifyContent="center" pt="2em" spacing={12} m="0 1.5em">
            <Paper elevation={1} sx={{ display: { xs: "none", md: "block" ,}, p: "2.5em 4em", }}>
              <SocialIcons />
            </Paper>
            <Paper elevation={1} sx={{ p: "2.5em 4em", }}>
              <SocialIcons />
            </Paper>
          </Stack>

          {/* SIMPLE GRID OF LIL'CARDS  */}
          <Stack direction="column" alignItems="center" justifyContent="center" pt="2em" m="1em 2.5em">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper elevation={3} sx={{ p: "2.5em 4em" }}>
                  <SocialIcons />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper elevation={3} sx={{ p: "2.5em 4em" }}>
                  <SocialIcons />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper elevation={3} sx={{ p: "2.5em 4em" }}>
                  <SocialIcons />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper elevation={3} sx={{ p: "2.5em 4em" }}>
                  <SocialIcons />
                </Paper>
              </Grid>
            </Grid>
          </Stack>

        </Box>
      </PageLayout>
    </>
  );
};

export default ContactUs;

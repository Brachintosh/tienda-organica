import Link from 'next/link';
import PageLayout from '../components/PageLayout';
import { useTheme, Box, Button, Typography, Divider, Stack, } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const boxWrapperStyles ={
    minHeight: "10em",
    height: "100%",
    width: "100%",
    padding: "6em .75em",
    bgcolor: `${theme.palette.colors.grayLight}`,
  };

  return (
    <>
      <PageLayout title="Tienda Orgánica"  icon='/logoTiendaOrg.png'>
        <Box sx={boxWrapperStyles} spacing={4}>
          
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}
            sx={{border: `solid ${theme.palette.colors.grayDark} .1px`, p: "2em 0"}}
            >
            <Typography variant="h5" color="tomato">
              Bienvenido a tú <Link href="https://www.tiendaorganica.com.ar" target="_blank">Tienda Orgánica!</Link>
            </Typography>
          </Stack>
          <br/>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}
            sx={{border: `solid ${theme.palette.colors.grayDark} .1px`, p: "2em 0"}}
          >
            <Typography variant="h4" color={`${theme.palette.colors.grayDark}`}>¡Ahora podés programar tu pedido!</Typography>
            <Typography variant="body1" color={`${theme.palette.colors.grayDark}`}>Programá tu pedido para todas las semanas, y retíralo por nuestra tienda o te lo llevamos a tu casa.</Typography>
            <Typography variant="h3" color={`${theme.palette.colors.grayDark}`}>¡Consultanos!</Typography>
          </Stack>
          
          <br/>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}
            sx={{border: `solid ${theme.palette.colors.grayDark} .1px`, p: "2em 0"}}
          >
            <Typography variant="h2" color={`${theme.palette.colors.grayDark}`}>GARANTIAS</Typography>
            <Typography variant="h5" color={`${theme.palette.colors.grayDark}`}>Trabajamos con productores orgánicos y agroecológicos.</Typography>
            <Typography variant="body1" color={`${theme.palette.colors.grayDark}`}>Proveedores que respetan y cumplen con los lineamientos de cultivo orgánico y agroecológico en casa proceso.</Typography>
          </Stack>
          
          
          <br/>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}
            sx={{border: `solid ${theme.palette.colors.grayDark} .1px`, p: "2em 0"}}
          >
            <Typography variant="h2" color={`${theme.palette.colors.grayDark}`}>Análisis</Typography>
            <Typography variant="h6" color={`${theme.palette.colors.grayDark}`}>Trabajamos en un análisis permanente de nuestros productores y proveedores, para garantizar la salubridad de los alimentos.</Typography>
          </Stack>
          
          <br/>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}
            sx={{border: `solid ${theme.palette.colors.grayDark} .1px`, p: "2em 0"}}
          >
            <Typography variant="h2" color={`${theme.palette.colors.grayDark}`}>¡Reservá ahora!</Typography>
            <Typography variant="h5" color={`${theme.palette.colors.grayDark}`}>Bolsón de estación</Typography>
            <Typography variant="h5" color={`${theme.palette.colors.grayDark}`}>Lunes a Viernes de <b>10:00</b> a <b>20:00</b> hs.</Typography>
            <Typography variant="h5" color={`${theme.palette.colors.grayDark}`}>Sábado de <b>10:00</b> a <b>15:00</b> hs.</Typography>
            <Typography variant="h4" color={`${theme.palette.colors.grayDark}`}>AlmaZen</Typography>
            {/* btn */}
            <Button variant="outlined">
              <Typography variant="h4" color={`${theme.palette.colors.grayDark}`}>¡Reservá ya!</Typography>
            </Button>
          </Stack>
        </Box>
      </PageLayout>
    </>
  );
};

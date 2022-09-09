import PageLayout from '../components/PageLayout';
import { useTheme, Typography, Divider, Stack, Drawer, List, ListItemButton, ListItemText, IconButton, Container, Box, } from "@mui/material";

const _404 = () => {
  const theme = useTheme();

  return (
    <>
      <PageLayout title="Pagina no encontrada" icon="/bio2.png" >
        <div className='container'>
          <Box sx={{ 
            display: "flex", justifyContent: "center",
            textShadow: "1.5px 1px .5px #fafafa",
            border: "solid white 1px", minHeight: "70vh", padding: "4em 3em", }}>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
              <Typography variant="h1" color={`${theme.palette.colors.grayDark}`}>Lo sentimos, la página no existe.</Typography>
              <Typography variant="h4" color={`${theme.palette.colors.grayDark}`}>No hay nada en este sitio...</Typography>
              <Typography variant="h5" color={`${theme.palette.colors.grayDark}`}>Somos proveedores que respetan y cumplen con los lineamientos de cultivo orgánico y agroecológico en cada proceso.</Typography>
            </Stack>
          </Box>
        </div>
          
        <style jsx>{`
          .container {
            padding-top: "1.5em";
            height: 100%;
            background-image: url("https://d1di2lzuh97fh2.cloudfront.net/files/2c/2cf/2cfa9l.jpg?ph=65935a34dc");
          }
        `}
        </style>
      </PageLayout>
    </>
  )
}

export default _404

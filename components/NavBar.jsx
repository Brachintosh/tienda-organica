import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../public/logoTiendaOrg.png";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, Stack, Typography, useTheme,  } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const NavBar = () => {
  const theme = useTheme();
  const appBarStyles = {
    width: "100%",
    display: "flex", flexDirection: "row",
    minHeight: "7em",
    backgroundColor: `${theme.palette.colors.white}`,
  };
  const logoStyles = {
    cursor: "pointer",
    border: "solid transparent .1px",
    maxWidth: "7em", maxHeight: "7em",
    marginLeft: ".5em",
  };
  const buttonStyles = {
    width: { xs: "10vw", md: "100%", lg: "100%", },
    display: "flex", justifyContent: "space-around",
    padding: { xs: "1.5em .75em", sm: "1.5em 1em", md: "3em .85em", lg: "3.5em 2.5em" },
    borderRadius: "0px",
    color: `${theme.palette.colors.dark}`,
    transition: "all 250ms ease-in-out",
    "&:hover": {
      backgroundColor: "#1AC779",
      boxShadow: "none",
      textShadow: "1.5px 1px .5px #343434",
      color: `${theme.palette.colors.grayLight}`,
    },
  };
  const typographyStyles = {
    fontWeight: 700,
    width: "100%",
  };
  const boxDesktopStyles = {
    display: { xs: "none", md: "block" },
  };
  const boxMobileStyles = {
    display: { xs: "block", md: "none" },
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position="sticky" sx={appBarStyles}>
      <Stack direction="row" sx={{ width: "100%", }} justifyContent="space-between" alignItems="center" spacing={2} >
        <Box sx={{ width: "30vw", maxHeight: "7em", }}>
          <Box sx={logoStyles}>
            <Link href='/'>
              <Image
                className="rounded-full"
                alt="Logotipo AlmaZen"
                src={logo}
                layout="responsive"
                height={2} width={2}
              />
            </Link>
          </Box>
        </Box>

        <Box flex={1} sx={boxDesktopStyles}>
          <Stack direction="row" spacing={1} justifyContent="space-between" sx={{ padding: 0, }}>
            <Button sx={buttonStyles}>
              <Link href='/bolson'>
                <Typography variant="body2" sx={typographyStyles}>Bolson</Typography>
              </Link>
            </Button>
            <Link href='/recipes'>
              <Button sx={buttonStyles}>
                <Typography variant="body2" sx={typographyStyles}>Recetas</Typography>
              </Button>
            </Link>
            <Link href='/about'>
              <Button sx={buttonStyles}>
                <Typography variant="body2" sx={typographyStyles}>Sobre Nosotros</Typography>
              </Button>
            </Link>
            <Link href='/contactUs'>
              <Button sx={buttonStyles}>
                <Typography variant="body2" sx={typographyStyles}>Contacto</Typography>
              </Button>
            </Link>
          </Stack>
        </Box>

        <Box sx={boxMobileStyles}>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuRoundedIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <Box 
              sx={{ minWidth: "50vw", minHeight: "80vh"}}
            >
              <List>
                <ListItemButton>
                  <ListItemText sx={{ height: "100vh"}}>
                    <Stack position="column" justifyContent="space-between" alignContent="start">
                      <Button onClick={() => setOpenDrawer(!openDrawer)} sx={buttonStyles}>
                        <Link href='/bolson'>
                          <Typography variant="body2" sx={typographyStyles}>Bolson</Typography>
                        </Link>
                      </Button>
                      <Divider />
                      <Link href='/recipes'>
                        <Button onClick={() => setOpenDrawer(!openDrawer)} sx={buttonStyles}>
                          <Typography variant="body2" sx={typographyStyles}>Recetas</Typography>
                        </Button>
                      </Link>
                      <Divider />
                      <Link href='/about'>
                        <Button onClick={() => setOpenDrawer(!openDrawer)} sx={buttonStyles}>
                          <Typography variant="body2" sx={typographyStyles}>Sobre Nosotros</Typography>
                        </Button>
                      </Link>
                      <Divider />
                      <Link href='/contactUs'>
                        <Button onClick={() => setOpenDrawer(!openDrawer)} sx={buttonStyles}>
                          <Typography variant="body2" sx={typographyStyles}>Contacto</Typography>
                        </Button>
                      </Link>
                    </Stack>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Box>
          </Drawer>

        </Box>

      </Stack >
    </AppBar >
  );
};

export default NavBar;

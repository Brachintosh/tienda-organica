import React from "react";
import { useTheme, Box, Grid, } from "@mui/material";
import SocialIcons from "../molecules/SocialIcons";
import Item from "../molecules/Item";

const FooterBrand = () => {
  const theme = useTheme();

  return (
    <>
      {/*  EL FOOTER ESTA MUY ALEJADO HACIA LOS COSTADOS EN RELACION AL FIGMA DESIGN  */}
      <Box bgcolor={theme.palette.colors.dark} sx={{ flexGrow: 1 }} >

        <Grid container spacing={2}>

          <Grid item xs={12} sm={6} lg={3}>
            <Item>
              <div className="columna1">
                <h2>Productos</h2>
                <ul>
                  <li><a href="#">Compre Junto</a></li>
                  <li><a href="#">Kit Look</a></li>
                  <li><a href="#">Completá tu compra</a></li>
                  <li><a href="#">Shop the look</a></li>
                  <li><a href="#">Sin Stock</a></li>
                </ul>
              </div>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Item>
              <div className="columna1">
                <h2>Mi Cuenta</h2>
                <ul>
                  <li><a href="#">Mis datos</a></li>
                  <li><a href="#">Mis pedidos</a></li>
                  <li><a href="#">Whishlist</a></li>
                  <li><a href="#">Productos Frecuentes</a></li>
                  <li><a href="#">Mis Listas</a></li>
                  <li><a href="#">Mis Recetas</a></li>
                </ul>
              </div>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Item>
              <div className="columna1">
                <h2>Contactanos</h2>
                <ul>
                  <li><a href="#">Nuestras Sucursales</a></li>
                  <li><a href="#">Horario y Teléfonos</a></li>
                </ul>
              </div>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Item>
              <div className="columna1">
                <SocialIcons />
              </div>
            </Item>
          </Grid>

        </Grid>


        <style jsx="true" >{`
          ul {
            list-style: none;
            border-top: solid white 2px;
            margin-top: 0.25em;
          }

          a {
            text-decoration: none;
            color: white;
            line-height: 2.5em;
          }

          .columna1 {
            margin: 0;
            padding: 1em 5em;
            display: flex;
            flex-direction: column;
          }
        `}
        </style>
      </Box>
    </>
  );
};

export default FooterBrand;

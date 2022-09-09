import { Box, styled, } from "@mui/material";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.colors.grayLight,
}));

export default Item;

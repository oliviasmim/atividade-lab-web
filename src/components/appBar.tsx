"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

interface Props {
  children?: React.ReactNode;
}

export const MyAppBar = ({ children }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Box>
  );
};

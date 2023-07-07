"use client";
import {useMemo, useState} from "react";
import {createTheme} from "@mui/material/styles"
import {ThemeProvider, CssBaseline} from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

export const ThemeSettings = ({ children }: Props) => {
    
    const theme = useMemo(() => createTheme(), [])
  return <ThemeProvider theme={theme}>
        <CssBaseline />
            {children}
      </ThemeProvider>;
};

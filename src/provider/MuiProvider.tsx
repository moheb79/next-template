"use client";

import { useMemo, type PropsWithChildren } from "react";

import { extendTheme, ThemeProvider } from "@mui/material/styles";

export default function MuiProvider({ children }: PropsWithChildren<object>) {
  /*
    info: Read the below documnet to create new theme
    @link: https://mui.com/material-ui/experimental-api/css-theme-variables/customization/
  */
  const theme = useMemo(() => extendTheme({}), []);

  return (
    <ThemeProvider theme={theme} defaultMode="light">
      {children}
    </ThemeProvider>
  );
}

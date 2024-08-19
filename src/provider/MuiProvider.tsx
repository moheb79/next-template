"use client";
import { useMemo, type PropsWithChildren } from "react";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

export default function MuiProvider({ children }: PropsWithChildren<{}>) {
  /* 
    info: Read the below documnet to create new theme
    @link: https://mui.com/material-ui/experimental-api/css-theme-variables/customization/
  */
  const theme = useMemo(() => extendTheme({}), []);

  return (
    <CssVarsProvider theme={theme} defaultMode="light">
      {children}
    </CssVarsProvider>
  );
}

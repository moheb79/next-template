import { type PropsWithChildren } from "react";
import MuiProvider from "./MuiProvider";
import RTLProvider from "./RTLProvider";

export default function Provider({ children, language }: PropsWithChildren<{ language: string }>) {
  return (
    <RTLProvider language={language}>
      <MuiProvider>{children}</MuiProvider>
    </RTLProvider>
  );
}

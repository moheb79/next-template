import { type PropsWithChildren } from "react";
import MuiProvider from "./MuiProvider";
import RTLProvider from "./RTLProvider";
import { I18nProviderClient } from "@/locales/client";

export default function Provider({ children, locale }: PropsWithChildren<{ locale: string }>) {
  return (
    <I18nProviderClient locale={locale}>
      <RTLProvider locale={locale}>
        <MuiProvider>{children}</MuiProvider>
      </RTLProvider>
    </I18nProviderClient>
  );
}

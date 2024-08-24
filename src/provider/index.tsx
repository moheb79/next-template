import { type PropsWithChildren } from "react";

import { I18nProviderClient } from "@/locales/client";

import MuiProvider from "./MuiProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import RTLProvider from "./RTLProvider";

export default function Provider({ children, locale }: PropsWithChildren<{ locale: string }>) {
  return (
    <I18nProviderClient locale={locale}>
      <ReactQueryProvider>
        <RTLProvider locale={locale}>
          <MuiProvider>{children}</MuiProvider>
        </RTLProvider>
      </ReactQueryProvider>
    </I18nProviderClient>
  );
}

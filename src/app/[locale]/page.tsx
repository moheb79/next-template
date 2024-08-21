import React from "react";

import { Typography } from "@mui/material";

import { getI18n, getScopedI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();
  const mmd = "2";
  console.log("2" === mmd);
  const scopedT = await getScopedI18n("page.hello");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography variant="h1">{t("page.hello.world")}</Typography>
      <Typography variant="h2">{scopedT("world")}</Typography>
    </main>
  );
}

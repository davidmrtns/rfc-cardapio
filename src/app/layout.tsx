import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

export const metadata: Metadata = {
  title: "Cardápio de Bolos - Rebeca Ferreira Confeitaria",
  description: "Cardápio de bolos da Rebeca Ferreira Confeitaria, com uma variedade de sabores e opções personalizadas."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/logo.svg" id="shortcut-icon" />
        <link rel="icon" href="/logo.svg" id="favicon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" id="apple-touch-icon" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme} >
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

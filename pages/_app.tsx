// pages/_app.tsx
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import { DefaultSeo } from "next-seo";

import theme from "../theme";

import "../styles/globals.css";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextUIProvider theme={theme}>
        <DefaultSeo /> {/* TODO: Configure SEO later */}
        <Toaster position="top-right" reverseOrder={false} />
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
};

export default MyApp;

import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";


import { NextUIProvider } from "@nextui-org/react";
import { appWithTranslation } from "@i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
 
  const router = useRouter();
  // const dir = getDirection(router.locale);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
    }
  }, []);


  return (
    <NextUIProvider>
      <Component {...pageProps} key={router.route} />
    </NextUIProvider>
  );
}

export default MyApp;

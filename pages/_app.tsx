/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/owl.carousel.min.css";
// import "@/styles/nice-select.min.css";
// import "@/styles/magnific-popup.min.css";
// import "@/styles/animate.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-expect-error
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />;
}

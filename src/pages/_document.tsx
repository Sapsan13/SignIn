import { Html, Head, Main, NextScript } from "next/document";
import StyledComponentsRegistry from "../../lib/registry";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@900&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <StyledComponentsRegistry>
          <Main />
        </StyledComponentsRegistry>
        <NextScript />
      </body>
    </Html>
  );
}

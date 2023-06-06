import "@public/fonts/spoqahansansneo.css";
import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import global from "@components/styles/global";
import Head from "next/head";
import theme from "@components/styles/theme";
import Header from "@components/templates/header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>메인타이틀</title>
        <link
          rel="shortcut icon"
          href="https://www.naver.com/favicon.ico"
          type="image/x-ico"
        />
      </Head>
      <Component {...pageProps} />
      <Header />
      <div id="modal" />
      <div id="drawer" />
    </ThemeProvider>
  );
};

export default App;

import { GlobalStyle } from "../styles";
import ArrowLeft from "../public/icons/arrow-left.svg"
import ArrowRight from "../public/icons/arrow-right.svg"

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ArrowLeft />
      <ArrowRight />
    </>
  );
}

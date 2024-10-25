import GlobalStyle from "../styles";
import chance from "chance";

export default function App({ Component, pageProps }) {
  var Chance = require("chance");

  // Instantiate Chance so it can be used
  var chance = new Chance();

  // Use Chance here.
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
  };
  console.log(character);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

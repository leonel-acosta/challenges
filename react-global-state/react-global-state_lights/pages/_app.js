import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react"

export default function App({ Component, pageProps }) {
  const initialLights = [
    {name:"Living Room", id:"1", isOn: false},
    {name:"Kitchen", id:"2", isOn: false},
    {name:"Bedroom", id:"3", isOn: false},
    {name:"Bathroom", id:"4", isOn: true},
    {name:"Garage", id:"5", isOn: false},
    {name:"Porch", id:"6", isOn: false},
    {name:"Garden", id:"7", isOn: true},
    {name:"Office", id:"8", isOn: false}
  ]

  const [lights, setLights] = useState(initialLights);

  function handleToggle(id) {
    setLights((lights) =>
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  const lightsOn = lights.filter(({isOn}) => isOn).length;

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} handleToggle={handleToggle} lightsOn={lightsOn}/>
    </Layout>
  );
}

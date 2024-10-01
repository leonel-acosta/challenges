import "./App.css";

export default function App() {
  return <Greeting name={"Pedro"}/>
}

export function Greeting({name}){
  return (<h1>{ name === "Gimena" ? "Hello Coach!": `Hello, ${name}!`}</h1>
  )
}
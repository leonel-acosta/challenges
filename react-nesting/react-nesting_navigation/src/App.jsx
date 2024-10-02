import Header from "./components/Header.jsx";
import Logo  from "./components/Logo.jsx";
import Navigation from "./components/Navigation.jsx"
import Link from "./components/Link.jsx"
import Avatar from "./components/Avatar.jsx"
import "./App.css";


export default function App() {
  return (
    <>
     <Header>
      <Logo/>
      <Navigation>
        <Link href="home">Home</Link>
        <Link href="about">About</Link>
        <Link href="impressum">Impressum</Link>
      </Navigation>
      <Avatar />
     </Header>
      <main>content goes here…</main>
    </>
  );
}

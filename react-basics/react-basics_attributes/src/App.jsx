import "./App.css";

export default function App() {
  return <Article/>;
}

export function Article() {
  return <article className="article">
    <h2 className="article__title">Anthropologist</h2>
    <p>An anthropologist is a person engaged in the practice of anthropology. Anthropology is the study of aspects of humans within past and present societies.[1][2][3] Social anthropology, cultural anthropology and philosophical anthropology study the norms, values, and general behavior of societies.</p>
    <label htmlFor="subscription">Subscribe for more articles</label>
    <input id="subscription"></input>
    <a className="article__link" href="https://en.wikipedia.org/wiki/Anthropologist">Keep reading</a>
  </article>
}
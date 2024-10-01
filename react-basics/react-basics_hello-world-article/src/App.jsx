import "./App.css";

export default function App() {
  return <HelloWorldArticle />;
}

export function HelloWorldArticle() {
  return <article>
    <h1>Hello World Article</h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus vel sem sed rhoncus. Nam at nunc augue. Vestibulum vel enim ultricies, accumsan enim nec, consequat elit. Nullam tempus, felis eget molestie posuere, mi ligula faucibus ipsum, id porta dui enim in nibh. Sed est ligula, efficitur in sem mattis, bibendum efficitur felis. Nullam placerat ipsum id libero dictum, sit amet pharetra lorem accumsan. Integer in ante rutrum, cursus purus in, suscipit urna. </p>
    <p className="small"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus vel sem sed rhoncus. Nam at nunc augue. Vestibulum vel enim ultricies, accumsan enim nec, consequat elit. Nullam tempus, felis eget molestie posuere, mi ligula faucibus ipsum, id porta dui enim in nibh. Sed est ligula, efficitur in sem mattis, bibendum efficitur felis. Nullam placerat ipsum id libero dictum, sit amet pharetra lorem accumsan. Integer in ante rutrum, cursus purus in, suscipit urna. </p>
  </article>
}
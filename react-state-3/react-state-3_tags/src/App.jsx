import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
    console.log()
    console.log("Add", newTag)
  }

  function handleDeleteTag( onDeleteTag ) {
    setTags(tags.filter((tag) => tag !== onDeleteTag))
    console.log()
    console.log("Delete", onDeleteTag)
  }

  return (
    <main className="app">
      <Form onAddTag={ handleAddTag }/>
      <List tags={tags} onDeleteTag={ handleDeleteTag }/>
    </main>
  );
}
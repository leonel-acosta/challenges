import './App.css'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Form from "./components/Form.jsx"
import Input from "./components/Input.jsx"
import Button from "./components/Button.jsx"
import CommentsSection from "./components/CommentsSection.jsx"
import Tabs from "./components/Tabs.jsx"
import Comment from "./components/Comment.jsx"

function App() {
  return (
    <>
      <Header />
      <Form title="New Entry"> 
        <Input label="Motto" id="motto" type="text" value="" name="Notes" />
        <Input label="Notes" id="notes" type="textarea" value="" name="Notes" />
        <Button text="Create" />
      </Form>
      <CommentsSection>
        <Tabs summary="All entries">
        </Tabs>
        <Tabs summary="Favorite">
        </Tabs>
          <Comment date="FEB 27, 2024" title="That's life in the city" comment="A simple functional component that displays a comment with a title"/>
          <Comment date="Oct 23, 2024" title="Not good" comment="A simple functional component that displays a comment with a title" favourite/>
      </CommentsSection>
      <Footer />
    </>
  )
}

export default App

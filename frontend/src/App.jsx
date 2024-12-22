import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";
import CreatePostPage from "./components/CreatePostPage";
import EditPostPage from "./components/EditPostPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Error } from "./components/Error";



function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element = {<About />}/>
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App

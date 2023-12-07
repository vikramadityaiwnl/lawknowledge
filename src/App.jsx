import "./styles/styles.css"
import HomePage from './pages/HomePage'
import BlogPage from './pages/PostPage'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:postid" element={<BlogPage />} />
      </Routes>
    </div>
  )
}

export default App

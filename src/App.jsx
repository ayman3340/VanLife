import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Component/Home/Home"
import About from "./Component/About/About"
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
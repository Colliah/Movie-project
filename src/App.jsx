import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Testpage from "./pages/Testpage"
import Test1page from "./pages/Test1page"
import MainLayout from "./pages/MainLayout"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="test" element={<Testpage />} />
      </Route>
    </Routes>
  )
}

export default App

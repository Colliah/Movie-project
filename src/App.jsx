import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./Layout/MainLayout"
import Testpage from "./pages/Testpage"
import DetailsMoviePage from "./pages/DetailsMoviePage"


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail-mov/:movieSlug" element={<DetailsMoviePage />} />
      </Route>

    </Routes>
  )
}

export default App

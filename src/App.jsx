import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./Layout/MainLayout"
import DetailsMoviePage from "./pages/DetailsMoviePage"


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail-mov/:movieSlug" element={<DetailsMoviePage />} />
        <Route path="/detail-mov/:movieSlug/:ep" element={<DetailsMoviePage />} />

        <Route path="/danh-sach/:slug" element={<HomePage />} />
        <Route path="/danh-sach/:slug/:page" element={<HomePage />} />

        <Route path="/the-loai/:slug/" element={<HomePage />} />
        <Route path="/the-loai/:slug/:page" element={<HomePage />} />



      </Route>

    </Routes>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DetailsMoviePage from "./pages/DetailsMoviePage"
import MainLayout from "./layout/MainLayout"


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail-mov/:movieSlug" element={<DetailsMoviePage />} />
        <Route path="/detail-mov/:movieSlug/:ep" element={<DetailsMoviePage />} />

        {/* <Route path="/:slug" element={<HomePage />} />
        <Route path="/:slug/:page" element={<HomePage />} /> */}

        <Route path="/danh-sach/:slug" element={<HomePage />} />
        <Route path="/danh-sach/:slug/:page" element={<HomePage />} />

        <Route path="/the-loai/:slug/" element={<HomePage />} />
        <Route path="/the-loai/:slug/:page" element={<HomePage />} />

      </Route>

    </Routes>
  )
}

export default App

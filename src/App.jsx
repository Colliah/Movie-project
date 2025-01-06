import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./Layout/MainLayout"


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="test" element={<Testpage />} /> */}
      </Route>
    </Routes>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
import Signup from "../pages/Signup/Signup"


function AppRouter() {
    return (
        <div className="w-100% h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
}
export default AppRouter
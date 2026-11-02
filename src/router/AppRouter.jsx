import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
import Signup from "../pages/Signup/Signup"
import Details from "../pages/Details/Details"

function AppRouter() {
    return (
        <div className="w-[100%] h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="details/:id" element={<Details />} />
                        <Route path="details" element={<Details />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default AppRouter
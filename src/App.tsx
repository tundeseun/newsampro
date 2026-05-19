
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Companies from "./pages/Companies";
import WhySamPro from "./pages/WhySamPro";
import Applications from "./pages/Applications";
import Contact from "./pages/Contact";

export default function App(){
return(
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/team" element={<Team/>}/>
<Route path="/companies" element={<Companies/>}/>
<Route path="/why-sampro" element={<WhySamPro/>}/>
<Route path="/applications" element={<Applications/>}/>
<Route path="/contact" element={<Contact/>}/>
</Routes>
<Footer/>
</BrowserRouter>
)
}

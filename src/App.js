import "./App.css";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Topbar from "./components/Topbar/Topbar";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/Menu/Menu";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="App">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Works />
                <Testimonials />
                <Contact />
            </div>
        </div>
    );
}

export default App;

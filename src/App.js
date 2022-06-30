import "./App.css";
import Nav from "./main/nav.js";
import Main from "./main/main.js";
import About from "./main/about.js";
import Project from "./main/project.js";
import Blog from "./main/blog.js";
import BlogContent from "./main/blogContent";
import Contact from "./main/contact";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Routes, Route } from "react-router-dom";

function App() {
    document.addEventListener("mousemove", (e) => {
        let cursor = document.getElementById("cursor");
        cursor.style.left = e.pageX - 10 + "px";
        cursor.style.top = e.pageY - 10 + "px";
    });

    return (
        <div style={{ overflow: "hidden", position: "relative" }}>
            <div className="dark" id="cursor"></div>

            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:title" element={<BlogContent />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;

import React, { useState } from "react";
import "./blog.css";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Blog() {
    React.useEffect(() => {
        document.title = "Blog";
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    const [loading, setLoading] = useState(true);

    if (loading) {
        return (
            <div className="loading">
                <TailSpin height="100" width="100" color="grey" ariaLabel="loading" /> <p>Kevin is thinking</p>
            </div>
        );
    }

    return (
        <section className="blog">
            <h1>
                <span className="underline">My blog</span>
            </h1>
            <div className="blog-container">
                <div className="blog-item">
                    <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className="blog-text">
                        <h3>Why we watch movie?</h3>
                        <div className="kotak-link">
                            <Link to={"/blog/why-we-watch-movie"}>View</Link>
                        </div>
                    </div>
                </div>
                <div className="blog-item">
                    <img src="https://images.unsplash.com/photo-1602045486350-4e53a69865c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80" alt="" />
                    <div className="blog-text">
                        <h3>Why we say thank you?</h3>
                        <div className="kotak-link">
                            <Link to={"/blog/why-we-say-thank-you"}>View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

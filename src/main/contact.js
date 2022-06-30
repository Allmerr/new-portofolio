import React, { useState } from "react";
import "./contact.css";
import { TailSpin } from "react-loader-spinner";

export default function Contact() {
    React.useEffect(() => {
        document.title = "Blog";
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    const labels = document.querySelectorAll("label");

    labels.forEach((label) => {
        label.innerHTML = label.innerText
            .split("")
            .map((e, i) => `<span style="transition-delay: ${i * 30}ms;">${e}</span>`)
            .join("");
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
        <section className="contact">
            <h1>
                <span className="underline">Contact</span>
            </h1>
            <div className="isi-form">
                <blockquote>
                    Politics is a contact sport.
                    <br />
                    <cite className="underline"> -steve chabot</cite>
                    <br />
                    <span> - @allmerr - github</span>
                </blockquote>
                <form action="https://formsubmit.co/kevinalmer4@gmail.com" method="POST">
                    <div className="form-control">
                        <input type="text" name="name" required />
                        <label>name</label>
                    </div>
                    <div className="form-control">
                        <input type="text" name="main-point" required />
                        <label>Main point</label>
                    </div>
                    <div className="form-control">
                        <textarea id="" cols="40" rows="12" name="message"></textarea>
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </section>
    );
}

import React from "react";
import "./about.css";
import img from "./icon-arrow-down.svg";
import { TailSpin } from "react-loader-spinner";

export default function About() {
    const [loading, setLoading] = React.useState(true);

    const fagFun = (e) => {
        e.target.parentNode.classList.toggle("active");
    };

    const fagFunImg = (e) => {
        e.target.parentNode.parentNode.classList.toggle("active");
    };

    React.useEffect(() => {
        document.title = "About";
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    // progress line

    const [count, setCount] = React.useState(0);

    const nextLearn = () => {
        if (count > 1) {
            return;
        }
        const circles = document.querySelectorAll(".learn .circle");
        const pL = document.querySelector(".learn .progress-line");
        setCount(count + 1);

        pL.style.width = (count + 1) * 50 + "%";
        circles[count + 1].classList.toggle("active");
    };

    const prevLearn = () => {
        if (count === 0) {
            return;
        }
        const circles = document.querySelectorAll(".learn .circle");
        const pL = document.querySelector(".learn .progress-line");
        setCount(count - 1);
        pL.style.width = (count - 1) * 50 + "%";
        circles[count].classList.toggle("active");
    };

    const text = [
        <div className="content-learn">
            <h3>
                <span className="underline">sass</span>
            </h3>
            <p>i want to explore more about css</p>
        </div>,
        <div className="content-learn">
            <h3>
                <span className="underline">tailwind</span>
            </h3>
            <p>i want to boot how i make a webstite</p>
        </div>,
        <div className="content-learn">
            <h3>
                <span className="underline">backend</span>
            </h3>
            <p>yeah i will be there</p>
        </div>,
    ];

    if (loading) {
        return (
            <div className="loading">
                <TailSpin height="100" width="100" color="grey" ariaLabel="loading" /> <p>Kevin is thinking</p>
            </div>
        );
    }

    return (
        <section className="about">
            <h1>
                <span className="underline">About Me</span>
            </h1>
            <div className="aboutme-isi">
                <img src="assetss/img/me.png" alt="" />
                <p>
                    Hello everyone, and thank you for coming to this site. My name is Kevin Almer. let me tell you about myself. I still in school in smkn1 cibinong and I have been learning web development for almost 1 year. I spend my
                    non-school time with play chees online , watch movie (check mengapa demikian : youtube there where i get all my favorite movie), listen to song (pmj is the best). They have been my friend when i am alone ( ◜‿◝ )
                </p>
            </div>
            <h1>
                <span className="underline">My Skill</span>
            </h1>
            <div className="cards">
                <div className="card cf cyan">
                    <h2>HTML</h2>
                    <p>markup language for documents designed to be displayed in a web browser.</p>
                </div>
                <div className="card cf red">
                    <h2>CSS</h2>
                    <p>a style sheet language used for describing the presentation of a document written in a markup language such as HTML</p>
                </div>
                <div className="card cf orange">
                    <h2>Javascript</h2>
                    <p>is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
                </div>
                <div className="card cf blue">
                    <h2>React</h2>
                    <p>when you use react you make web diffrent from reguler html-css-js.</p>
                </div>
            </div>
            <h1>
                <span className="underline">Faq</span>
            </h1>
            <div className="fag-container">
                <div className="fag-el">
                    <div className="fag-head" onClick={fagFun}>
                        <h3>Why you learn these stuff?</h3>
                        <img src={img} alt="" onClick={fagFunImg} />
                    </div>
                    <p>well because my school work, i learn about this field but i got interested so, ya.</p>
                </div>
                <div className="fag-el">
                    <div className="fag-head" onClick={fagFun}>
                        <h3>Where you learn these stuff?</h3>
                        <img src={img} alt="" onClick={fagFunImg} />
                    </div>
                    <p>from scholl, youtube-sandhika-galih, many more.</p>
                </div>
                <div className="fag-el">
                    <div className="fag-head" onClick={fagFun}>
                        <h3>What you can do?</h3>
                        <img src={img} alt="" onClick={fagFunImg} />
                    </div>
                    <p>html5 , css3 , js-es6, react, react-router, boostrap, animate.css</p>
                </div>
            </div>
            <h1>
                <span className="underline">Next Learn</span>
            </h1>
            <section className="learn">
                <div className="number-container">
                    <div className="progress-line"></div>
                    <div className="circle active">1</div>
                    <div className="circle">2</div>
                    <div className="circle">3</div>
                </div>
                {text[count]}
                <div className="button-container">
                    <button className="prev" onClick={prevLearn}>
                        prev
                    </button>
                    <button className="next" onClick={nextLearn}>
                        next
                    </button>
                </div>
            </section>
        </section>
    );
}

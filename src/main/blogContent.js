import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./blogContent.css";
import { TailSpin } from "react-loader-spinner";

export default function BlogContent() {
    const url = useParams();
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
        <>
            {url.title.slice(-1) === "e" ? (
                <section className="blog-detail">
                    <h1>
                        <span className="underline">Why do we watch movie</span>
                    </h1>
                    <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <p>
                        why do we watch movies? sometimes we are tired and want a little entertainment. sometimes we are just curious and attached to the story. sometimes we want to pass the time and kill boredom. but why do we watch a
                        movie actually? Through movies, we can be motivated to do something. Through movies, we can imagine something extraordinary things. Through movies, we can see the beauty of life in this world. Through movies, we can
                        know what love is. Through movies, we can also get friends who can understand us. sometimes movies make us grateful for life. these lead us to a new experience that we have never experienced before. and that
                        experience rises what is called a feeling. feeling that rarely out in our daily activities. that is the beauty of movies, and that is why we watch movies.
                    </p>
                    <p> -- english council</p>
                </section>
            ) : (
                <section className="blog-detail">
                    <h1>
                        <span className="underline">why we say thank you</span>
                    </h1>

                    <img src="https://images.unsplash.com/photo-1602045486350-4e53a69865c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80" alt="" />
                    <p>
                        hello, I am kevin almer. before the speech begin I would like to ask you a question? do you have any plans to go abroad or if you visit another country but are only allowed to use only one word, what word do you
                        choose?. for me I would choose without a doubt the word thanks because why? -it's the simplest way of expressing grateful Saying thank you means you are grateful for the things that happened to you as a result of
                        someone else's effort. it not only makes others feel great but also makes you feel great. -it's a great sign of respect for another person Saying thank you can mean 'i appreciate you.' that means I respect what you
                        do what you've done Saying thank you may be quite simple but the impact could be bigger than you expect. so saying thank you to your family, to your inner circle. and that is from me. thank you for listening
                    </p>
                    <p> -- english council</p>
                </section>
            )}
        </>
    );
}

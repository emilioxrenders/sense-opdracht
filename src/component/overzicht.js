import React, { useState, useEffect } from 'react';

const Overzicht = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://opdracht.sense-company.com/scents')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8">
                    <h1 class="mb-5">Discover our extensive collection and find the right scent</h1>
                </div>
            </div>

            <div className="row">
                {posts.map((post) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5" key={post.id}>
                            <div className="overzicht-item h-100">
                                <a href={post.id}>
                                    <div className="overzicht-image">
                                        <img src={post.image.url} alt={post.image.alt} />
                                    </div>

                                    <div className="px-3 py-4">
                                        <h2 className="mb-2">{post.title}</h2>
                                        <p className="mb-0 fst-italic">{post.description}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// function Overzicht() {
//     return (
//         <h1>Overzicht</h1>
//     );
// }

export default Overzicht;  
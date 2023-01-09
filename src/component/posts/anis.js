import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, Check2 } from "react-bootstrap-icons";

const Anis = () => {
    const [post, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://opdracht.sense-company.com/scents/4')
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
        <div className="container pb-5">
            <div className="row">
                <div className="col-12 mb-4 d-flex align-items-center post-back">
                    <Link to="/"><ArrowLeft className="me-2" />Terug naar overzicht</Link>
                </div>

                <div className="col-lg-6 col-12 pe-lg-5">
                    <h1 class="mb-4">{post.title}</h1>
                    <p class="post-description position-relative fst-italic mb-4 pb-4">{post.description}</p>
                    {post.tags?.map((tags) => {
                        return (
                            <p className="" key={tags.id}><Check2 className="me-2 post-check" />{tags.name}</p>
                        );
                    })}
                </div>

                <div className="col-lg-6 col-12 ps-lg-5 position-relative mt-5 mt-lg-0">
                    {post.image &&
                        <div className="post-image">
                            <img src={post.image.url} alt="test" />
                        </div>
                    }
                    {post.top_scent === 1 &&
                        <p class="mb-4 d-flex px-4 py-2 justify-content-center align-items-center position-absolute post-topseller">Topseller!</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Anis;  
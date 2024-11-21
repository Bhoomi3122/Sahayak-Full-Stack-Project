import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Posts.scss'; 


const getTimeAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diffInMs = now - createdDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
};

const Posts = () => {
    const [posts, setPosts] = useState(null);
    const [expandedPost, setExpandedPost] = useState(null);

    const togglePostExpansion = (index) => {
        setExpandedPost(expandedPost === index ? null : index); 
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                console.log(`${process.env.REACT_APP_API_URL}/api/routes`)
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/routes`);
                
                const json = await response.json();

                if (response.ok) {
                    setPosts(json);
                    toast.success('Posts loaded successfully!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                } else {
                    toast.error(`Error: ${json.error}`, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                }
            } catch (error) {
                toast.error(`Network error: ${error.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="posts-container">
            {posts && posts.map((post, index) => {
                const isExpanded = expandedPost === index;
                const { Title, Issue, Location, Solution, Keywords, IsAnonymous, Name, Caution, createdAt } = post;

                return (
                    <div key={index} className={`post-card ${isExpanded ? 'expanded' : ''}`}>
                        <div className="post-header">
                            <span className="time-label">{getTimeAgo(createdAt)}</span>
                        </div>

                      
                        <h4 className="title">{Title || "Untitled Post"}</h4>

                        
                        <p className="issue"><strong>Issue:</strong> {Issue || "No issue described"}</p>

                        
                        {isExpanded && (
                            <div className="post-details">
                                <p><strong>Location:</strong> {Location || "Not specified"}</p>
                                {Solution && <p><strong>Solution:</strong> {Solution}</p>}
                                {Caution && <p><strong>Caution:</strong> {Caution}</p>}
                                {Keywords && (
                                    <div className="keywords">
                                        <strong>Keywords:</strong>
                                        {Keywords.split(',').map((keyword, idx) => (
                                            <span key={idx} className="keyword" style={{ animationDelay: `${idx * 0.2}s` }}>
                                                {keyword.trim()}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <p className="posted-by">
                                    Posted by: {IsAnonymous ? "Anonymous" : Name || "Unknown"}
                                </p>
                            </div>
                        )}

                        <button
                            onClick={() => togglePostExpansion(index)}
                            className="toggle-button"
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;

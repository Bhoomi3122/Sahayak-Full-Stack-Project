import React, { useEffect, useState } from 'react';
import '../styles/Blogs.css';
import blogsData from '../blogs.json'; // Directly import the JSON file

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 8;

    useEffect(() => {
        setBlogs(blogsData); // Load the blogs data from JSON file
    }, []);

    // Calculate the start and end indices of the blogs for the current page
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Function to handle button click and redirect
    const handleReadMore = (url) => {
        window.open(url, '_blank'); // Open the URL in a new tab
    };

    // Pagination logic
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    // Generate an array of page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(blogs.length / blogsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="blog-container">
            {currentBlogs.map((blog, index) => (
                <div className="blog-card" key={index}>
                    <img src={blog.image} alt={blog.title} className="blog-image" />
                    <div className="blog-content">
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-description">{blog.description}</p>
                        <button className="read-more" onClick={() => handleReadMore(blog.readMore)}>
                            Read More
                        </button>
                    </div>
                </div>
            ))}

            {/* Pagination Controls */}
            <div className="pagination-container">
                <div className="pagination">
                    <button
                        className="pagination-button"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            className={`pagination-number ${currentPage === number ? 'active' : ''}`}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </button>
                    ))}
                    <button
                        className="pagination-button"
                        onClick={handleNextPage}
                        disabled={indexOfLastBlog >= blogs.length}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

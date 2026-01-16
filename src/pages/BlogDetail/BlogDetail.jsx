import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Container from "../../components/common/Container/Container";
import * as mockData from '../../data/mockData';
import './BlogDetail.css';

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [blog, setBlog] = useState(null);
    const [author, setAuthor] = useState(null);
    const [category, setCategory] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogData = () => {
            try {
                // Scroll to top when navigating to blog detail
                window.scrollTo(0, 0);
                
                // Simulate loading
                setLoading(true);
                
                setTimeout(() => {
                    // Fetch blog data
                    const blogData = mockData.getBlogById(id);
                    
                    if (!blogData) {
                        // If blog not found, redirect to 404
                        navigate('/not-found');
                        return;
                    }
                    
                    // Set blog data
                    setBlog(blogData);
                    
                    // Fetch author data
                    const authorData = mockData.getAuthorById(blogData.authorId);
                    setAuthor(authorData);
                    
                    // Fetch category data
                    const categoryData = mockData.getCategoriesById(blogData.categoryId);
                    setCategory(categoryData);
                    
                    // Fetch related blogs (same category, excluding current)
                    const allBlogs = mockData.getAllBlogs();
                    const related = allBlogs
                        .filter(b => b.categoryId === blogData.categoryId && b.id !== id)
                        .slice(0, 3);
                    setRelatedBlogs(related);
                    
                    setLoading(false);
                }, 1000); // Simulate network delay
            } catch (error) {
                console.error('Error fetching blog data:', error);
                navigate('/not-found');
            }
        };
        
        fetchBlogData();
    }, [id, navigate]);

    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };
    
    // Render loading skeleton
    if (loading) {
        return (
            <div className="blog-detail-page">
                <div className="blog-detail-hero-wrapper">
                    <Container>
                        <div className="blog-detail-hero">
                            <div className="skeleton-hero"></div>
                            <div className="hero-content">
                                <div className="skeleton-button"></div>
                                <div className="skeleton-badge"></div>
                            </div>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className="blog-detail-container">
                        <div className="blog-detail-header">
                            <div className="skeleton-title"></div>
                            <div className="skeleton-meta"></div>
                        </div>
                        <div className="blog-detail-content">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="skeleton-paragraph" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    // If no blog data is found
    if (!blog || !author || !category) {
        return null; // This will be handled by the useEffect redirect
    }

    return (
        <div className="blog-detail-page">
            {/* Hero Section with Cover Image */}
            <div className="blog-detail-hero-wrapper">
                <Container>
                    <div className="blog-detail-hero">
                        <img 
                            src={blog.coverImage} 
                            alt={blog.title}
                            className="blog-cover-image"
                        />
                        <div className="hero-content">
                            <Link 
                                to="/" 
                                className="back-button"
                            >
                                ← Back to Blogs
                            </Link>
                            <span 
                                className="blog-category"
                                style={{ backgroundColor: category.color }}
                            >
                                {category.name}
                            </span>
                        </div>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="blog-detail-container">
                    {/* Blog Header */}
                    <div className="blog-detail-header">
                        <h1 className="blog-title">{blog.title}</h1>
                        
                        <div className="blog-meta">
                            <div className="author-info">
                                <img 
                                    src={author.avatar} 
                                    alt={author.name} 
                                    className="author-avatar"
                                />
                                <div className="author-details">
                                    <span className="author-name">{author.name}</span>
                                    <span className="publish-date">{formatDate(blog.createdAt)}</span>
                                </div>
                            </div>
                            
                            <div className="blog-stats">
                                <span className="stat">
                                    <i className="stat-icon">👁️</i> {blog.views.toLocaleString()} views
                                </span>
                                <span className="stat">
                                    <i className="stat-icon">❤️</i> {blog.likes} likes
                                </span>
                                <span className="stat">
                                    <i className="stat-icon">⏱️</i> {blog.readTime} read
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Blog Content */}
                    <div className="blog-detail-content">
                        {/* Blog Excerpt as intro paragraph */}
                        <p className="blog-excerpt">{blog.excerpt}</p>
                        
                        {/* Content paragraphs */}
                        {blog.content.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    
                    {/* Author Bio */}
                    <div className="author-bio">
                        <img 
                            src={author.avatar} 
                            alt={author.name} 
                            className="author-avatar-large"
                        />
                        <div className="author-bio-content">
                            <h3>About {author.name}</h3>
                            <p>{author.bio || `${author.name} is a contributing writer at BlogSpace.`}</p>
                        </div>
                    </div>
                    
                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="blog-tags">
                            {blog.tags.map((tag, index) => (
                                <span key={index} className="blog-tag">#{tag}</span>
                            ))}
                        </div>
                    )}
                    
                    {/* Related Posts */}
                    {relatedBlogs.length > 0 && (
                        <div className="related-posts">
                            <h2>Related Posts</h2>
                            <div className="related-posts-grid">
                                {relatedBlogs.map(relatedBlog => {
                                    const relatedAuthor = mockData.getAuthorById(relatedBlog.authorId);
                                    return (
                                        <div 
                                            key={relatedBlog.id} 
                                            className="related-post-card"
                                            onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                                        >
                                            <div className="related-post-image">
                                                <img src={relatedBlog.coverImage} alt={relatedBlog.title} />
                                            </div>
                                            <div className="related-post-content">
                                                <h3>{relatedBlog.title}</h3>
                                                <div className="related-post-meta">
                                                    <img 
                                                        src={relatedAuthor.avatar} 
                                                        alt={relatedAuthor.name} 
                                                        className="tiny-avatar"
                                                    />
                                                    <span>{relatedAuthor.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    
                    {/* Social Share */}
                    <div className="social-share">
                        <h3>Share this article</h3>
                        <div className="social-buttons">
                            <button className="social-button twitter">Twitter</button>
                            <button className="social-button facebook">Facebook</button>
                            <button className="social-button linkedin">LinkedIn</button>
                            <button className="social-button copy">Copy Link</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetail;
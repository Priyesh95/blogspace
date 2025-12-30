import { useNavigate } from 'react-router-dom'
import * as mockData from '../../../data/mockData'
import './BlogCard.css'

function BlogCard({ blog, showAuthor = true, onDelete }) {
    const navigate = useNavigate()

    // Get related data
    const author = mockData.getAuthorById(blog.authorId)
    const category = mockData.getCategoriesById(blog.categoryId)

    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    // Navigate to blog detail
    const handleCardClick = () => {
        navigate(`/blog/${blog.id}`)
    }

    return (
        <div className="blog-card" onClick={handleCardClick}>
            {/* Cover Image */}
            <div className="blog-card__image">
                <img src={blog.coverImage} alt={blog.title} />

                {/* Category Badge (overlay on image) */}
                <span
                    className="blog-card__category"
                    style={{ backgroundColor: category?.color }}
                >
                    {category?.name}
                </span>
            </div>

            {/* Card Content */}
            <div className="blog-card__content">
                {/* Title */}
                <h3 className="blog-card__title">{blog.title}</h3>

                {/* Excerpt */}
                <p className="blog-card__excerpt">
                    {blog.excerpt.length > 120
                        ? blog.excerpt.substring(0, 120) + '...'
                        : blog.excerpt
                    }
                </p>

                {/* Meta Information */}
                <div className="blog-card__meta">
                    {/* Author Info (conditionally rendered) */}
                    {showAuthor && author && (
                        <div className="blog-card__author">
                            <img src={author.avatar} alt={author.name} />
                            <span>{author.name}</span>
                        </div>
                    )}

                    {/* Date */}
                    <span className="blog-card__date">
                        {formatDate(blog.createdAt)}
                    </span>
                </div>

                {/* Footer with stats */}
                <div className="blog-card__footer">
                    <span className="blog-card__stat">
                        👁️ {blog.views.toLocaleString()} views
                    </span>
                    <span className="blog-card__stat">
                        ❤️ {blog.likes} likes
                    </span>
                    <span className="blog-card__stat">
                        ⏱️ {blog.readTime}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
import React from 'react';
import './BlogCardSkeleton.css';

function BlogCardSkeleton() {
  return (
    <div className="blog-card-skeleton">
      {/* Image Skeleton */}
      <div className="blog-card-skeleton__image">
        <div className="blog-card-skeleton__category"></div>
      </div>

      {/* Content Skeleton */}
      <div className="blog-card-skeleton__content">
        {/* Title Skeleton */}
        <div className="blog-card-skeleton__title">
          <div className="skeleton-line"></div>
          <div className="skeleton-line" style={{ width: '70%' }}></div>
        </div>

        {/* Excerpt Skeleton */}
        <div className="blog-card-skeleton__excerpt">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line" style={{ width: '80%' }}></div>
        </div>

        {/* Meta Information Skeleton */}
        <div className="blog-card-skeleton__meta">
          <div className="blog-card-skeleton__author">
            <div className="skeleton-circle"></div>
            <div className="skeleton-line" style={{ width: '40%' }}></div>
          </div>
          <div className="skeleton-line" style={{ width: '30%' }}></div>
        </div>

        {/* Footer with stats Skeleton */}
        <div className="blog-card-skeleton__footer">
          <div className="skeleton-line" style={{ width: '25%' }}></div>
          <div className="skeleton-line" style={{ width: '25%' }}></div>
          <div className="skeleton-line" style={{ width: '25%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default BlogCardSkeleton;

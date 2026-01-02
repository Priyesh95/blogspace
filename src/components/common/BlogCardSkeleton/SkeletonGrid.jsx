import React from 'react';
import BlogCardSkeleton from './BlogCardSkeleton';

function SkeletonGrid({ count = 6 }) {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </>
  );
}

export default SkeletonGrid;

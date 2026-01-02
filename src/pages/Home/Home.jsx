
import { useEffect, useState } from "react";
import Container from "../../components/common/Container/Container";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import SkeletonGrid from "../../components/common/BlogCardSkeleton/SkeletonGrid";
import * as mockData from '../../data/mockData'
import Hero from "../../components/common/Hero/Hero";
import CategoryScroller from "../../components/common/CategoryScroller/CategoryScroller";
import "./Home.css";

const Home = () => {  
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const blogs = mockData.getAllBlogs();
      setBlogs(blogs);
      setLoading(false);
    }, 3000);
    
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  
  // Filter logic - 'all' shows all blogs, otherwise filter by category
  const filteredBlogs = activeFilter === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.categoryId === parseInt(activeFilter));

  return (
    <>
      {/* Hero Section - Full Width */}
      <Hero onCategoryChange={setActiveFilter} loading={loading}/>
      
      {/* Category Scroller - Full Width */}
      {!loading && (
        <CategoryScroller />
      )}
      {/* Blog Grid in Container */}
      <Container>
        <div className="blog-grid">
          {loading ? (
            <SkeletonGrid count={6} />
          ) : (
            filteredBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          )}
        </div>
      </Container>
    </>
  )
}   

export default Home;


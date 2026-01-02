
import { useState } from "react";
import Container from "../../components/common/Container/Container";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import * as mockData from '../../data/mockData'
import Hero from "../../components/common/Hero/Hero";
import CategoryScroller from "../../components/common/CategoryScroller/CategoryScroller";
import "./Home.css";

const Home = () => {  
  const blogs = mockData.getAllBlogs();
  const categories = mockData.getAllCategories();
  const [activeFilter, setActiveFilter] = useState('all');

  
  // Filter logic - 'all' shows all blogs, otherwise filter by category
  const filteredBlogs = activeFilter === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.categoryId === parseInt(activeFilter));

  return (
    <>
      {/* Hero Section - Full Width */}
      <Hero onCategoryChange={setActiveFilter} />
      
      {/* Category Scroller - Full Width */}
      <CategoryScroller />
      
      {/* Blog Grid in Container */}
      <Container>
        <div className="blog-grid">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </Container>
    </>
  )
}   

export default Home;


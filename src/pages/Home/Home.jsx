
import Container from "../../components/common/Container/Container";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import * as mockData from '../../data/mockData'

const Home = () => {  
  const blogs = mockData.getAllBlogs()

    return (
      <Container>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {blogs.slice(0, 3).map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Container>
    )
}   

export default Home;


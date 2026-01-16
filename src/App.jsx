import { useState } from 'react'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import './App.css'
import './styles/globals.css'
import Container from './components/common/Container/Container'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import BlogDetail from './pages/BlogDetail/BlogDetail'
import Topics from './pages/Topics/Topics'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import MyBlogs from './pages/MyBlogs/MyBlogs'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import EditBlog from './pages/EditBlog/EditBlog'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter } from 'react-router-dom'
import * as mockData from './data/mockData'
function App() {

  const [globalSearchTerm, setGlobalSearchTerm] = useState('');

  return (
    <div className="app">
      <Header onSearch={setGlobalSearchTerm} />
      <main className="main-content">
      <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home searchTerm={globalSearchTerm} />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/topics" element={<Topics />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes (we'll add protection later) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-blogs" element={<MyBlogs />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}


console.log('All Blogs:', mockData.getAllBlogs())
console.log('Blog with ID 1:', mockData.getBlogById("blog-001"))
console.log('All Categories:', mockData.getAllCategories())

export default App

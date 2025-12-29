import { users } from "./users";
import { categories } from "./categories";
import { blogs } from "./blogs";

export const getAllBlogs = function() {
    return blogs.filter((blog)=>{
        return blog.published;  
    })
}

export const getBlogById = function(id) {
    return blogs.find((blog)=>{
        return blog.id === id;  
    })
}

export const getBlogBySlug = function(slug) {
    return blogs.find((blog) =>{
        return blog.slug === slug;
    })
}

export const getBlogsByCategory = function(categoryId){
    return blogs.filter((blog) => {
        return blog.categoryId === categoryId;
    });
}

export const getBlogsByAuthor = function(authorId){
    return blogs.filter((blog) => {
        return blog.authorId === authorId;
    });
}

export const getAuthorById = function(authorId){
    return users.find((user) => {
        return user.id === authorId;
    });
}

export const getCategoriesById = function(categoryId){
    return categories.find((category) => {
        return category.id === categoryId;
    });
}

export const searchBlogs = function(query){
    const lowerCaseQuery = query.toLowerCase();
    return blogs.filter((blog)=>{
        return blog.published && (blog.title.toLowerCase().includes(lowerCaseQuery) || blog.content.toLowerCase().includes(lowerCaseQuery) || blog.excerpt.toLowerCase().includes(lowerCaseQuery));
    })
}

// Get all categories
export const getAllCategories = () => {
    return categories
  }
  
// Get user by email (for login)
export const getUserByEmail = (email) => {
return users.find(user => user.email === email)
}
    

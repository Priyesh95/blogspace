import { createContext, useState, useEffect } from "react";
import * as mockData from "../data/mockData"


const AuthContext = createContext();


export const AuthProvider = function ({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('blogspace_user')
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser)
                setCurrentUser(user)
            } catch (error) {
                console.error('Error parsing stored user:', error)
                localStorage.removeItem('blogspace_user')
            }
        }
        setLoading(false)
    }, [])

    // Login function
    const login = (email, password) => {
        // Find user by email
        const user = mockData.getUserByEmail(email)

        if (!user) {
            return { success: false, error: 'User not found' }
        }

        if (user.password !== password) {
            return { success: false, error: 'Incorrect password' }
        }

        // Remove password before storing (security best practice)
        const { password: _, ...userWithoutPassword } = user

        // Set current user
        setCurrentUser(userWithoutPassword)

        // Store in localStorage
        localStorage.setItem('blogspace_user', JSON.stringify(userWithoutPassword))

        return { success: true, user: userWithoutPassword }
    }

    // Register function (we'll implement this in Task 5.2)
    const register = (userData) => {
        // TODO: Implement in next task
        return { success: false, error: 'Not implemented yet' }
    }

    // Logout function
    const logout = () => {
        setCurrentUser(null)
        localStorage.removeItem('blogspace_user')
    }

    // Update user profile
    const updateUser = (updatedData) => {
        const updatedUser = { ...currentUser, ...updatedData }
        setCurrentUser(updatedUser)
        localStorage.setItem('blogspace_user', JSON.stringify(updatedUser))
    }

    // Check if user is authenticated
    const isAuthenticated = () => {
        return currentUser !== null
    }

    // Check if current user is author of a blog
    const isAuthor = (authorId) => {
        return currentUser && currentUser.id === authorId
    }

    const value = {
        currentUser,
        login,
        register,
        logout,
        updateUser,
        isAuthenticated,
        isAuthor,
        loading
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
import Container from "../../components/common/Container/Container";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Login.css'
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate()
    const { login, currentUser } = useAuth()
    
    // Add class to body when component mounts and remove when unmounts
    useEffect(() => {
        document.body.parentElement.classList.add('login-page-container');
        
        return () => {
            document.body.parentElement.classList.remove('login-page-container');
        };
    }, []);

    // Form state
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loginError, setLoginError] = useState('')

    // Redirect if already logged in
    if (currentUser) {
        navigate('/')
        return null
    }

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }

        // Clear login error
        if (loginError) {
            setLoginError('')
        }
    }

    // Validate form
    const validate = () => {
        const newErrors = {}

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()

        // Validate
        if (!validate()) {
            return
        }

        setIsSubmitting(true)
        setLoginError('')

        // Simulate API delay
        setTimeout(() => {
            const result = login(formData.email, formData.password)

            if (result.success) {
                // Redirect to dashboard
                navigate('/')
            } else {
                setLoginError(result.error)
                setIsSubmitting(false)
            }
        }, 500)
    }

    return (
        <div className="login-page">
            <Container>
                <div className="login-container">
                    <div className="login-card">
                        {/* Header */}
                        <div className="login-header">
                            <h1>Welcome Back!</h1>
                            <p>Log in to manage your blogs</p>
                        </div>

                        {/* Login Error */}
                        {loginError && (
                            <div className="alert alert-error">
                                {loginError}
                            </div>
                        )}

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="login-form">
                            {/* Email Field */}
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'error' : ''}
                                    placeholder="your@email.com"
                                    autoComplete="email"
                                />
                                {errors.email && (
                                    <span className="error-message">{errors.email}</span>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={errors.password ? 'error' : ''}
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                />
                                {errors.password && (
                                    <span className="error-message">{errors.password}</span>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Logging in...' : 'Log In'}
                            </button>
                        </form>

                        {/* Footer */}
                        <div className="login-footer">
                            <p>
                                Don't have an account? {' '}
                                <Link to="/register">Sign up here</Link>
                            </p>
                        </div>

                        {/* Demo Credentials */}
                        <div className="demo-credentials">
                            <p><strong>Demo Credentials:</strong></p>
                            <p>Email: john@example.com</p>
                            <p>Password: password123</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )

}

export default Login;
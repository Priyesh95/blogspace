import * as mockData from '../../../data/mockData'
import { useEffect, useState } from 'react'
import './Hero.css'


const Hero = ({onCategoryChange}) => {
    const categories = mockData.getAllCategories();
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        onCategoryChange(activeFilter);
    }, [activeFilter]);

    return (
        <div className="hero-banner">
          <div className="decorative-blob"></div>
          <div className="wave-bottom"></div>
          <div className="container">
            <div className="hero-content">
            <h1>Welcome to BlogSpace!</h1>
            <p>Discover stories, thinking, and expertise from writers on different topics.</p>
            
            {/* Category Filter Pills */}
            <div className="category-filters">
              <button 
                className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
                style={{ 
                  backgroundColor: activeFilter === 'all' ? 'rgba(147, 51, 234, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  color: activeFilter === 'all' ? 'white' : 'wheat',
                  borderColor: activeFilter === 'all' ? 'rgba(147, 51, 234, 0.9)' : 'rgba(76, 29, 149, 0.3)',
                  fontWeight: activeFilter === 'all' ? '700' : '600'
                }}
              >
                All Posts
              </button>
              
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-pill ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                  style={{ 
                  backgroundColor: activeFilter === category.id ? 'rgba(147, 51, 234, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  color: activeFilter === category.id ? 'white' : 'wheat',
                  borderColor: activeFilter === category.id ? 'rgba(147, 51, 234, 0.9)' : 'rgba(76, 29, 149, 0.3)',
                  fontWeight: activeFilter === category.id ? '700' : '600'
                }}
                >
                  {category.name}
                </button>
              ))}
            </div>
            </div>
          </div>
        </div>
    )
}

export default Hero


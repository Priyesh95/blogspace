import React, { useEffect, useRef } from 'react';
import * as mockData from '../../../data/mockData';
import './CategoryScroller.css';

const CategoryScroller = () => {
  // Get all categories
  const categories = mockData.getAllCategories();
  const scrollerRef = useRef(null);
  
  // Get enough duplicates to fill the screen multiple times
  const getMultipliedCategories = () => {
    const multiplier = Math.ceil((window.innerWidth * 3) / (categories.length * 150));
    return Array(multiplier).fill(categories).flat();
  };
  
  useEffect(() => {
    // Ensure proper sizing and duplication on resize
    const handleResize = () => {
      if (scrollerRef.current) {
        const leftRow = scrollerRef.current.querySelector('.scroll-left');
        const rightRow = scrollerRef.current.querySelector('.scroll-right');
        
        // Create enough duplicates to fill the viewport multiple times
        const multipliedCategories = getMultipliedCategories();
        
        // Update rows with new content if needed
        if (leftRow && rightRow && leftRow.children.length < multipliedCategories.length * 2) {
          // Force refresh if needed
          scrollerRef.current.style.opacity = '0.99';
          setTimeout(() => {
            scrollerRef.current.style.opacity = '1';
          }, 50);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener('resize', handleResize);
  }, [categories]);
  
  // Multiply categories to ensure we have enough to fill the screen several times over
  const multipliedCategories = [...categories, ...categories, ...categories, ...categories, 
                               ...categories, ...categories, ...categories, ...categories,
                               ...categories, ...categories, ...categories, ...categories];
  
  return (
    <div className="category-scroller" ref={scrollerRef}>
      <div className="category-scroller__container">
        <div className="category-scroller__wrapper">
          {/* First row - left to right */}
          <div className="category-scroller__row scroll-left">
            {multipliedCategories.map((category, index) => (
              <div 
                key={`left-${category.id}-${index}`} 
                className="category-scroller__item"
                style={{ 
                  backgroundColor: `${category.color}30`,  // 30 is hex for 0.19 opacity
                  borderColor: `${category.color}40`      // 40 is hex for 0.25 opacity
                }}
                onClick={() => window.scrollTo({ top: document.querySelector('.blog-grid')?.offsetTop - 20 || 0, behavior: 'smooth' })}
              >
                <span style={{ color: category.color }}>#{category.name}</span>
              </div>
            ))}
          </div>
          
          {/* Second row - right to left */}
          <div className="category-scroller__row scroll-right">
            {[...multipliedCategories].reverse().map((category, index) => (
              <div 
                key={`right-${category.id}-${index}`} 
                className="category-scroller__item"
                style={{ 
                  backgroundColor: `${category.color}30`,
                  borderColor: `${category.color}40`
                }}
                onClick={() => window.scrollTo({ top: document.querySelector('.blog-grid')?.offsetTop - 20 || 0, behavior: 'smooth' })}
              >
                <span style={{ color: category.color }}>#{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryScroller;

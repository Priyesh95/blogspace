import { useState } from 'react'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <h1>Welcome to BlogSpace</h1>
          <p>Your platform for sharing ideas and stories.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

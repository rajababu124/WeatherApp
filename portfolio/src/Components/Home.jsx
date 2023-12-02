import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <section class="hero">
        <div class="hero-content">
            <h1>Welcome to My Awesome startup scalers</h1>
            <p>Your one-stop destination for creativity and innovation.</p>
            <Link to='/projects' >My Portfolio</Link>
        </div>
    </section>
    <div className="container">
    <section class="features row">
        <div class="feature col-md-4">
            <i class="fas fa-paint-brush"></i>
            <h2>Creative Design</h2>
            <p>Our designs are both beautiful and functional.</p>
        </div>
        <div class="feature col-md-4">
            <i class="fas fa-laptop-code"></i>
            <h2>Web Development</h2>
            <p>We build websites that bring your ideas to life.</p>
        </div>
        <div class="feature col-md-4">
            <i class="fas fa-rocket"></i>
            <h2>Launch Success</h2>
            <p>Your success is our mission. We're here to help you succeed.</p>
        </div>
    </section>
    </div>
    </>
  )
}

export default Home

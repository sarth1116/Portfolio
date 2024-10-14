// components/Home.js
import React from 'react';

function Home({ scrollToSection }) {

    
  return (
    <section id="home" className="home-section d-flex align-items-center" style={{ height: '100vh', backgroundColor: '#000' }}>
      <div className="container text-warning d-flex justify-content-between align-items-center">
        <div className="text-content">
          <h1 className="display-3 animated-heading" style={{ fontWeight: '800' }}><span style={{ color: '#f0eeeb' }}>Hello,</span><br /> I'm Sarthak Lahare</h1>
          <h3 className="mt-3" style={{ color: '#f5f2ec' }}>Student<br />Web Developer (MERN)</h3>
          <button className="btn btn2 mt-5"  style={{ backgroundColor:' rgb(241, 176, 45)',
   borderRadius: '30px',
    color:' #ff,',
    margin:' 5px'}} onClick={() => scrollToSection('projects')}>Explore My Work</button>
          <a href="https://www.linkedin.com/in/sarthak-lahare-46547b249"  style={{ backgroundColor:' rgb(241, 176, 45)',
   borderRadius: '30px',
    color:' #ff,',
    margin:' 5px'}} className="btn btn2 mt-5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
     <a href="Sarthak Resume[2].pdf" download='Sarthak Resume' style={{ backgroundColor:' rgb(241, 176, 45)',
   borderRadius: '30px',
    color:' #ff,',
    margin:' 5px'}} className="btn btn2 mt-5" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        <div className="profile-picture">
        <img 
  src={`${process.env.PUBLIC_URL}/sarthak.png`} 
  alt="Sarthak" 
  className="img-fluid" 
  style={{ width: '300px', height: 'auto' }} 
/>

        </div>
      </div>
    </section>
  );
}

export default Home;
